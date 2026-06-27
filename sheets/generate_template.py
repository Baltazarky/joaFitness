import xlsxwriter

# Create the workbook and sheets
workbook = xlsxwriter.Workbook('Trainer_Routine_Template.xlsx')
db_sheet = workbook.add_worksheet('Database')
routine_sheet = workbook.add_worksheet('Routine')

# Define Formatting
header_format = workbook.add_format({'bold': True, 'bg_color': '#D3D3D3', 'border': 1})
subheader_format = workbook.add_format({'bold': True, 'bg_color': '#EAEAEA', 'border': 1})
bold_format = workbook.add_format({'bold': True})
pct_format = workbook.add_format({'num_format': '0%', 'border': 1})
border_format = workbook.add_format({'border': 1})
hidden_format = workbook.add_format({'hidden': True})

# Conditional Formatting colors (MRV Warnings)
mrv_green = workbook.add_format({'bg_color': '#C6EFCE', 'font_color': '#006100'})
mrv_yellow = workbook.add_format({'bg_color': '#FFEB9C', 'font_color': '#9C6500'})
mrv_red = workbook.add_format({'bg_color': '#FFC7CE', 'font_color': '#9C0006'})

# ================================
# PHASE 1: DATABASE SETUP
# ================================
db_headers = ['Exercise Name', 'Primary Muscle', 'Secondary Muscle', 'Movement Pattern']
db_sheet.write_row('A1', db_headers, header_format)

exercises = [
    ['Dumbbell Bench Press', 'Chest', 'Triceps', 'Horizontal Push'],
    ['Incline Barbell Bench', 'Chest', 'Front Delts', 'Incline Push'],
    ['Barbell Squat', 'Quads', 'Glutes', 'Squat'],
    ['Leg Press', 'Quads', 'None', 'Squat'],
    ['Deadlift', 'Hamstrings', 'Back', 'Hinge'],
    ['Romanian Deadlift (RDL)', 'Hamstrings', 'Glutes', 'Hinge'],
    ['Pull Up', 'Back', 'Biceps', 'Vertical Pull'],
    ['Lat Pulldown', 'Back', 'Biceps', 'Vertical Pull'],
    ['Barbell Row', 'Back', 'Biceps', 'Horizontal Pull'],
    ['Seated Cable Row', 'Back', 'Biceps', 'Horizontal Pull'],
    ['Overhead Press', 'Shoulders', 'Triceps', 'Vertical Push'],
    ['Lateral Raise', 'Shoulders', 'None', 'Isolation'],
    ['Tricep Rope Extension', 'Triceps', 'None', 'Isolation'],
    ['Dumbbell Bicep Curl', 'Biceps', 'None', 'Isolation'],
    ['Leg Curl', 'Hamstrings', 'None', 'Isolation'],
    ['Leg Extension', 'Quads', 'None', 'Isolation'],
    ['Calf Raise', 'Calves', 'None', 'Isolation']
]

for i, row in enumerate(exercises):
    db_sheet.write_row(i + 1, 0, row)

db_sheet.set_column('A:A', 25)
db_sheet.set_column('B:D', 18)

# ================================
# PHASE 2: ROUTINE LAYOUT & UI
# ================================
# 1. Client Header Block
routine_sheet.write('A1', 'Client Name:', header_format)
routine_sheet.write('B1', '', border_format)
routine_sheet.write('A2', 'Current Phase:', header_format)
routine_sheet.write('B2', 'Hypertrophy Block 1', border_format)
routine_sheet.write('A3', 'Date/Week:', header_format)
routine_sheet.write('B3', 'Week 1', border_format)
routine_sheet.write('A4', 'Primary Goal:', header_format)
routine_sheet.write('B4', 'Build Mass', border_format)

routine_sheet.set_column('A:A', 15)
routine_sheet.set_column('B:B', 25)

# 2. Routine Table Setup
routine_headers = [
    'Day/Block', 'Exercise Name', 'Sets', 'Target Reps', 
    'Load / Weight', 'RPE / RIR', 'Rest Time', 'Volume Load', 
    'Primary (Hidden)', 'Secondary (Hidden)'
]
routine_sheet.write_row('A6', routine_headers, header_format)

routine_sheet.set_column('C:H', 13)
routine_sheet.set_column('I:J', 20, hidden_format, {'hidden': True})

# 3. Data Validation & Formulas for routine
for i in range(6, 56):  # 50 rows for exercises (Row 7 to 56)
    row_num = i + 1
    
    # Empty borders for visual cleanliness
    for col in range(8):
        routine_sheet.write(i, col, '', border_format)

    # Data Validation Dropdown for Exercise (Column B)
    # Allows selection from Database!A2:A50
    routine_sheet.data_validation(
        f'B{row_num}', 
        {'validate': 'list', 'source': '=Database!$A$2:$A$50'}
    )

    # VLOOKUP/XLOOKUP for Primary and Secondary Muscles (Hidden Columns I and J)
    # Using XLOOKUP (Works in modern Excel and Google Sheets)
    routine_sheet.write_formula(
        f'I{row_num}', 
        f'=IFERROR(VLOOKUP(B{row_num}, Database!$A$2:$C$50, 2, FALSE), "")'
    )
    routine_sheet.write_formula(
        f'J{row_num}', 
        f'=IFERROR(VLOOKUP(B{row_num}, Database!$A$2:$C$50, 3, FALSE), "")'
    )
    
    # Volume Load Calculation (Sets * Load)
    # Assumes Sets is C, Load is E
    routine_sheet.write_formula(
        f'H{row_num}', 
        f'=IF(AND(ISNUMBER(C{row_num}), ISNUMBER(E{row_num})), C{row_num}*E{row_num}, "")',
        border_format
    )

# ================================
# PHASE 3 & 4: LOGIC, CALCULATION & DASHBOARD
# ================================
# Dashboard Header
routine_sheet.write('L1', 'DASHBOARD & INSIGHTS', header_format)
routine_sheet.merge_range('L1:N1', 'DASHBOARD & INSIGHTS', header_format)

summary_headers = ['Muscle Group', 'Total Sets (Vol)', '% of Total']
routine_sheet.write_row('L3', summary_headers, subheader_format)

muscles = ['Chest', 'Back', 'Quads', 'Hamstrings', 'Glutes', 'Shoulders', 'Triceps', 'Biceps', 'Front Delts', 'Calves']

# Populate summary table with logic (Primary * 1.0 + Secondary * 0.5)
for i, muscle in enumerate(muscles):
    row_num = i + 4 # Starts at L4
    routine_sheet.write(f'L{row_num}', muscle, border_format)
    
    # SUMIFS to add up Sets (Col C) if Primary matches (Col I) + 0.5 * Sets if Secondary matches (Col J)
    formula_volume = (
        f'=SUMIFS($C$7:$C$56, $I$7:$I$56, L{row_num})*1.0 '
        f'+ SUMIFS($C$7:$C$56, $J$7:$J$56, L{row_num})*0.5'
    )
    routine_sheet.write_formula(f'M{row_num}', formula_volume, border_format)
    
    # Percentage calculation
    formula_pct = f'=IF(SUM($M$4:$M$13)=0, 0, M{row_num}/SUM($M$4:$M$13))'
    routine_sheet.write_formula(f'N{row_num}', formula_pct, pct_format)

routine_sheet.set_column('L:L', 15)
routine_sheet.set_column('M:N', 16)

# Conditional Formatting for MRV (Column M)
# Max Recoverable Volume thresholds
routine_sheet.conditional_format('M4:M13', {'type': 'cell', 'criteria': '>=', 'value': 20, 'format': mrv_red})
routine_sheet.conditional_format('M4:M13', {'type': 'cell', 'criteria': 'between', 'minimum': 16, 'maximum': 19.99, 'format': mrv_yellow})
routine_sheet.conditional_format('M4:M13', {'type': 'cell', 'criteria': '<', 'value': 16, 'format': mrv_green})

# Insert Doughnut Chart
chart = workbook.add_chart({'type': 'doughnut'})

chart.add_series({
    'name': 'Weekly Volume Distribution',
    'categories': '=Routine!$L$4:$L$13',
    'values': '=Routine!$N$4:$N$13',
    'data_labels': {'percentage': True, 'category': True, 'separator': '\n'}
})

chart.set_title({'name': 'Weekly Volume Distribution'})
chart.set_style(10) # Modern styling
chart.set_size({'width': 480, 'height': 320})

# Insert chart below the summary table
routine_sheet.insert_chart('L15', chart)

# Pre-fill a small example day to show it working!
example_data = [
    ['Day 1', 'Dumbbell Bench Press', 3, '8-10', 50, '8', '90s'],
    ['Day 1', 'Incline Barbell Bench', 3, '8-12', 135, '8', '90s'],
    ['Day 1', 'Pull Up', 4, 'AMRAP', 0, '9', '120s'],
    ['Day 1', 'Lateral Raise', 4, '15-20', 20, '9', '60s']
]

for r_idx, row_data in enumerate(example_data):
    excel_row = r_idx + 6 # Rows 7, 8, 9, 10
    for c_idx, val in enumerate(row_data):
        routine_sheet.write(excel_row, c_idx, val, border_format)

workbook.close()
print("Template created successfully: Trainer_Routine_Template.xlsx")