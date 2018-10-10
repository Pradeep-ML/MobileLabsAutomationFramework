'##########################################################################################################
'Objective: Login to the PhoneLookup app and test MobiEdit
' Test Description: Execute all MobiEdit methods on  Username Edit Box
'##########################################################################################################
' Step1: Execute CaptureBitmap with .png format
' Step2: Execute CaptureBitmap with .bmp format
' Step3: Execute CaptureBitmap to override an .bmp image
' Step4: Execute CaptureBitmap to override an .png image
' Step5: Execute CheckProperty when object is visible
' Step6: Execute ChildObjects recursively
' Step7: Execute ChildObjects non-recursively
' Step8: Execute Clear  on long string
' Step9: Execute Clear when no text  is visible in Edit box
' Step10: Execute Clear  on small  string
' Step11: Execute Exist when object is visible
' Step12: Execute GetROProperty
' Step13: Execute GetTOProperties
' Step14: Execute GetTOProperty
' Step15: Execute GetVisibleText method with coordinates
' Step16: Execute GetVisibleText method without coordinates
' Step17: Execute RefreshObject
' Step18: Execute Set  with Alphanumeric String
' Step19: Execute Set  with  String cointaining special characters
' Step20: Execute 'ToString
' Step21: Execute 'WaitProperty when object is visible
' Step22: Execute SetTOProperty
' Step23: Execute Click with  Boundary coordinates at Top-Left corner
' Step24: Execute Click with  Boundary coordinates at Top-Right corner
' Step25: Execute Click with  Boundary coordinates at Bottom-Left corner
' Step26: Execute Click with  Boundary coordinates at Bottom-Right corner
' Step27: Execute Click with  Random coordinates
' Step28: Execute Click without coordinates
' Step29: Execute Click  at only one co-ordinate (Only X)
' Step30: Execute Click  at only one co-ordinate (Only Y)
' Step31: Execute Click  at  any valid value
' Step32: Execute DblClick  without  co-ordinates
' Step33: Execute DblClick  with boundary co-ordinates
' Step34: Execute DblClick  with Random co-ordinates
' Step35: Execute DblClick  with only X  co-ordinate
' Step36: Execute DblClick  with only Y  co-ordinate
' Step37: Execute LongClick  without  co-ordinates with valid lapse time
' Step38: Execute LongClick  with boundary co-ordinates
' Step39: Execute LongClick  with Random co-ordinates
' Step40: Execute LongClick  with only X  co-ordinate
' Step41: Execute LongClick  with only Y  co-ordinate
' Step42: Execute LongClick  with valid  values 
' Step43: Execute Exist when object is not visible
' Step44: Execute WaitProperty when object is not visible
' Step45: Execute CheckProperty when object is not  visible

'#######################################################
'Declare Variables
Dim strStepsToReproduce
Dim strStepName
Dim intStep
Dim blnResult
Dim strTestName
'#######################################################

'#######################################################
'Initializations
intStep = 0
Environment("Component") = "PhoneLookup_ObjectBased"
Environment("StepsToReproduce") = ""
Environment("MethodName")  = ""
Environment("intStepNo") = 0
Environment("Status") = ""
'#######################################################

'Input values
arrTOProps = Array("accessibilitylabel","visible")
arrToPropValues = Array("Username Field","True")
arrROProps = Array("accessibilitylabel" , "nativeclass","resourcename","name")
arrROPropValues = Array("Username Field" , "android.widget.EditText","usernameEditText","Edit")

'Create an html report template
CreateReportTemplate()

'Set object for Edit box
Set objMobiEdit =MobiDevice("Phone Lookup").MobiEdit("UserName")

'Call navigate to screen function 
 NavigateScreenOnPhoneLookup "Login", objMobiEdit , ""

'Capture Sign In button screenshot  before execution
strImagePathBefore = Environment("SystemTempDir") & "\" & Replace(Replace(Replace(CStr(Now), "/", ""), " ", "_"), ":", "") & ".bmp" 
MobiDevice("Phone Lookup").MobiButton("SignIn").CaptureBitmap strImagePathBefore , True

'###########################################################

' Step1:  Execute CaptureBitmap with .png format
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute CaptureBitmap with .png format" & VBNewLine
Environment("Description") = "Execute method to capture image in .png format"
Environment("ExpectedResult") = "Image should get captured in .png format"
blnResult = VerifyCaptureBitmap(objMobiEdit , "png")

' Step2:  Execute CaptureBitmap with .bmp format
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute CaptureBitmap with .bmp format" & VBNewLine
Environment("Description") = "Execute method to capture image in .bmp format"
Environment("ExpectedResult") = "Image should get captured in .bmp format"
blnResult = VerifyCaptureBitmap(objMobiEdit , "bmp")

' Step3:  Execute CaptureBitmap to override an .bmp image
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute CaptureBitmap  to override an .bmp image" & VBNewLine
Environment("Description") = "Execute method  to override an .bmp image"
Environment("ExpectedResult") = "Override error message should be thrown"
blnResult = VerifyCaptureBitmap(objMobiEdit , "override_bmp")

' Step4:  Execute CaptureBitmap to override an .png image
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute CaptureBitmap  to override an .png image" & VBNewLine
Environment("Description") = " Execute method  to override an .png image"
Environment("ExpectedResult") =  "Override error message should be thrown"
blnResult = VerifyCaptureBitmap(objMobiEdit , "override_png")

' Step5:  Execute CheckProperty when object is visible
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute  CheckProperty when object is visible" & VBNewLine
Environment("Description") = "Execute method to check property value when object is visible"
Environment("ExpectedResult") = "CheckProperty should wait for the property to attain a value."
blnResult = VerifyCheckProperty(objMobiEdit, "accessibilitylabel", "Username Field" , 5000, True)

' Step6: Execute ChildObjects recursively
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute ChildObjects on MobiEdit." & VBNewLine
Environment("Description") ="Verfiy child object count recursively"
Environment("ExpectedResult") = "ChildObjects should return the count of children (if any) else 0"
blnResult = VerifyChildObjects(objMobiEdit,"recursive",0)

' Step7: Execute ChildObjects non-recursively
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute ChildObjects on MobiEdit." & VBNewLine
Environment("Description") ="Verfiy child object count non-recursively"
Environment("ExpectedResult") = "ChildObjects should return the count of children (if any) else 0"
blnResult = VerifyChildObjects(objMobiEdit,"nonrecursive",0)

' Step8: Execute Clear  on long string
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Clear on MobiEdit." & VBNewLine
Environment("Description") ="Verfiy method to clear long string"
Environment("ExpectedResult") = "There should be no text in the Edit box"
blnResult = VerifyClear( objMobiEdit , "withlongtext")

' Step9: Execute Clear when no text  is visible in Edit box
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Clear on MobiEdit." & VBNewLine
Environment("Description") =" Execute Clear when no text  is visible in Edit box"
Environment("ExpectedResult") = "There should be no text in the Edit box"
blnResult = VerifyClear( objMobiEdit , "withnotext")

' Step10: Execute Clear  on small  string
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Clear on MobiEdit." & VBNewLine
Environment("Description") ="Verfiy method to clear small  string"
Environment("ExpectedResult") = "There should be no text in the Edit box"
blnResult = VerifyClear( objMobiEdit , "withtext")

' Step11: Execute Exist when object is visible
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Exist on MobiEdit when object is visible" & VBNewLine
Environment("Description") = "Verify method when object is visible"
Environment("ExpectedResult") = "Exist should return True when object is visible"
blnResult = VerifyExist(objMobiEdit, True, 5)

' Step12:  Execute GetROProperty
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute GetROProperty on MobiEdit." & VBNewLine
Environment("Description") = "Verify object run time values"
Environment("ExpectedResult") = "GetROProperty should get the correct run-time value for a property."
blnResult = VerifyGetROProperty(objMobiEdit , arrROProps , arrROPropValues)

' Step13: Execute GetTOProperties
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute GetTOProperties on MobiEdit." & VBNewLine
Environment("Description") = "Verify object description properties"
Environment("ExpectedResult") = "GetTOProperties should get all properties for an object that are used for description."
blnResult = VerifyGetTOProperties(objMobiEdit, arrTOProps)

' Step14: Execute GetTOProperty
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute GetTOProperty on MobiEdit." & VBNewLine
Environment("Description") = " Verify object description propertie and their values"
Environment("ExpectedResult") = "GetTOProperty should return the correct value for the test object property."
blnResult =  VerifyGetTOProperty(objMobiEdit, arrTOProps, arrToPropValues)

' Step15: Execute GetVisibleText method with coordinates
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intSubStep & ": " &_
"Execute GetVisibleText on MobiEdit with coordinates." & VBNewLine
Environment("Description") = " Execute method with co-ordinates"
Environment("ExpectedResult") = "GetVisibleText should return correct text after OCRing."
blnResult = VerifyGetVisibleText(objMobiEdit, True)

' Step16: Execute GetVisibleText method without coordinates
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intSubStep & ": " &_
"Execute GetVisibleText on MobiEdit without coordinates." & VBNewLine
Environment("Description") = " Execute method without  co-ordinates"
Environment("ExpectedResult") = "GetVisibleText should return correct text after OCRing."
blnResult = VerifyGetVisibleText(objMobiEdit, False)

' Step17: Execute RefreshObject
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute RefreshObject  on MobiEdit." & VBNewLine
Environment("Description") = "Verify object refresh"
Environment("ExpectedResult") = "RefreshObject should re-identify  the object in the application"
blnResult = VerifyRefreshObject(objMobiEdit)

' Step18 : Execute Set  with Alphanumeric String
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Set" & VBNewLine
Environment("Description") = "Execute method to set alphanumeric string"
Environment("ExpectedResult") = "User should be able to set value"
blnResult = VerifySet(objMobiEdit , "testing123" , null)

' Step19: Execute Set  with  String cointaining special characters
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Set" & VBNewLine
Environment("Description") = "Execute method to set  string cointaining special characters"
Environment("ExpectedResult") = "User should be able to set value"
blnResult = VerifySet(objMobiEdit ,  "Testing..~!@#$%^&*()_+{}|:<>?/.,';\][=-`0123456789" , null)

' Step20: Execute 'ToString
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute TOString on MobiEdit." & VBNewLine
Environment("Description") = "Verify object  type and class"
Environment("ExpectedResult") = "ToString should return the object type and class."
blnResult = VerifyTOString(objMobiEdit)

' Step21: Execute 'WaitProperty when object is visible
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute WaitProperty on MobiEdit when object is visible." & VBNewLine
Environment("Description") = " Verify waitproperty when object is visible"
Environment("ExpectedResult") = "WaitProperty should wait for the property to attain a value"
blnResult = VerifyWaitProperty(objMobiEdit, "accessibilitylabel", "Username Field", 5000, True)

' Step22: Execute SetTOProperty
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute SetTOProperty on MobiEdit." & VBNewLine
Environment("Description") = "Property values should get updated"
Environment("ExpectedResult") = "SetTOProperty should set the value of the test object property."
blnResult = VerifySetTOProperty(objMobiEdit, arrTOProps)

'*********************************************************************************************************************
'objMobiEdit.Set "mobilelabs"

' Step23: Execute Click with  Boundary coordinates at Top-Left corner
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Click on MobiEdit with Boundary coordinates." & VBNewLine
Environment("Description") = "Execute method with boundary co-ordinates at Top-Left corner"
Environment("ExpectedResult") = "Click should work correctly."
blnResult = VerifyClick(objMobiEdit, "withboundarycoordsTopLeft")

'Close keypad
CloseAndroidKeypad

' Step24: Execute Click with  Boundary coordinates at Top-Right corner
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Click on MobiEdit with Boundary coordinates." & VBNewLine
Environment("Description") = "Execute method with boundary co-ordinates at Top-Right corner"
Environment("ExpectedResult") = "Click should work correctly."
blnResult = VerifyClick(objMobiEdit, "withboundarycoordsTopRight")

'Close keypad
CloseAndroidKeypad

' Step25: Execute Click with  Boundary coordinates at Bottom-Left corner
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Click on MobiEdit with Boundary coordinates." & VBNewLine
Environment("Description") = "Execute method with boundary co-ordinates at Bottom-Left corner"
Environment("ExpectedResult") = "Click should work correctly."
blnResult = VerifyClick(objMobiEdit, "withboundarycoordsBottomLeft")

'Close keypad
CloseAndroidKeypad

' Step26: Execute Click with  Boundary coordinates at Bottom-Right corner
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Click on MobiEdit with Boundary coordinates." & VBNewLine
Environment("Description") = "Execute method with boundary co-ordinates at Bottom-Right corner"
Environment("ExpectedResult") = "Click should work correctly."
blnResult = VerifyClick(objMobiEdit, "withboundarycoordsBottomRight")
'Close keypad
CloseAndroidKeypad

' Step27: Execute Click with  Random coordinates
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Click on MobiEdit with Random coordinates." & VBNewLine
Environment("Description") = " Execute method with Random co-ordinates"
Environment("ExpectedResult") = "Click should work correctly."
blnResult = VerifyClick(objMobiEdit, "withrandomcoords")


'Close keypad
CloseAndroidKeypad

' Step28: Execute Click without coordinates
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Click on MobiEdit without coordinates." & VBNewLine
Environment("Description") = "Execute method without  co-ordinates"
Environment("ExpectedResult") = "Click should work correctly."
blnResult =  VerifyClick(objMobiEdit, "withoutcoords")

'Close keypad
CloseAndroidKeypad

' Step29: Execute Click  at only one co-ordinate (Only X)
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Click on MobiEdit with only X coordinate" & VBNewLine
Environment("Description") = " Execute method with only X co-ordinate"
Environment("ExpectedResult") = "Click should work correctly."
blnResult =  VerifyClick(objMobiEdit, "withxvalue")

'Close keypad
CloseAndroidKeypad

' Step30: Execute Click  at only one co-ordinate (Only Y)
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Click on MobiEdit with only Y coordinate" & VBNewLine
Environment("Description") = "Execute method with only Y co-ordinate"
Environment("ExpectedResult") = "Click should work correctly."
blnResult =  VerifyClick(objMobiEdit, "withyvalue")

'Close keypad
CloseAndroidKeypad

' Step31: Execute Click  at  any valid value
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Click  at  any valid value." & VBNewLine
Environment("Description") = "Execute method with any valid co-ordinates"
Environment("ExpectedResult") = "Click should work correctly."
blnResult =  VerifyClick(objMobiEdit, "withvalidvalue")

'Close keypad
CloseAndroidKeypad

' Step32: Execute DblClick  without  co-ordinates
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute DblClick ." & VBNewLine
Environment("Description") = "Execute method without co-ordinates"
Environment("ExpectedResult") = "DblClick  should work correctly."
blnResult =  VerifyDblClick(objMobiEdit , "withoutcoords") 

'Close keypad
CloseAndroidKeypad

' Step33: Execute DblClick  with boundary co-ordinates
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute DblClick ." & VBNewLine
Environment("Description") = " Execute method with Boundary co-ordinates"
Environment("ExpectedResult") = "DblClick  should work correctly."
blnResult =  VerifyDblClick(objMobiEdit , "withboundarycoords") 

'Close keypad
CloseAndroidKeypad

' Step34: Execute DblClick  with Random co-ordinates
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute DblClick ." & VBNewLine
Environment("Description") = "Execute method with Random co-ordinates"
Environment("ExpectedResult") = "DblClick  should work correctly."
blnResult =  VerifyDblClick(objMobiEdit , "withrandomcoords") 

'Close keypad
CloseAndroidKeypad

' Step35: Execute DblClick  with only X  co-ordinate
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute DblClick ." & VBNewLine
Environment("Description") = "Execute method with only X Co-ordinate"
Environment("ExpectedResult") = "DblClick  should work correctly."
blnResult =  VerifyDblClick(objMobiEdit , "withonlyxcoord") 

'Close keypad
CloseAndroidKeypad

' Step36: Execute DblClick  with only Y  co-ordinate
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute DblClick ." & VBNewLine
Environment("Description") = " Execute method with only Y  Co-ordinate"
Environment("ExpectedResult") = "DblClick  should work correctly."
blnResult =  VerifyDblClick(objMobiEdit , "withonlyycoord") 

'Close keypad
CloseAndroidKeypad

' Step37: Execute LongClick  without  co-ordinates with valid lapse time
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute LongClick ." & VBNewLine
Environment("Description") = "Execute method without co-ordinates with valid lapse time"
Environment("ExpectedResult") = "LongClick  should work correctly."
blnResult =  VerifyLongClick(objMobiEdit , "validlapsewithoutcoords") 

'Close keypad
CloseAndroidKeypad

' Step38: Execute LongClick  with boundary co-ordinates
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute LongClick ." & VBNewLine
Environment("Description") = " Execute method with Boundary co-ordinates with valid lapse time"
Environment("ExpectedResult") = "LongClick  should work correctly."
blnResult =  VerifyLongClick(objMobiEdit , "validlapseboundarycoords") 

'Close keypad
CloseAndroidKeypad

' Step39: Execute LongClick  with Random co-ordinates
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute LongClick ." & VBNewLine
Environment("Description") = " Execute method with Random co-ordinates and valid lapse time"
Environment("ExpectedResult") = "LongClick  should work correctly."
blnResult =  VerifyLongClick(objMobiEdit , "validlapserandomcoords") 
'Close keypad
CloseAndroidKeypad

' Step40: Execute LongClick  with only X  co-ordinate
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute LongClick ." & VBNewLine
Environment("Description") = " Execute method with only X Co-ordinate and valid lapse time"
Environment("ExpectedResult") = "LongClick  should work correctly."
blnResult =  VerifyLongClick(objMobiEdit , "validlapsexcoords") 

'Close keypad
CloseAndroidKeypad

' Step41: Execute LongClick  with only Y  co-ordinate
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute LongClick ." & VBNewLine
Environment("Description") = " Execute method with only Y  Co-ordinate and valid lapse time"
Environment("ExpectedResult") = "LongClick  should work correctly."
blnResult =  VerifyLongClick(objMobiEdit , "validlapseycoords") 

'Close keypad
CloseAndroidKeypad

' Step42 : Execute LongClick  with valid  values 
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute LongClick ." & VBNewLine
Environment("Description") = " Execute method with valid X , Y and Lapsetime value"
Environment("ExpectedResult") = "LongClick  should work correctly."
blnResult =  VerifyLongClick(objMobiEdit , "withvalidlapsevalidvalue") 

'Close keypad
CloseAndroidKeypad

'Navigate to other screen
Login "mobilelabs" , "demo"

' Step43:  Execute Exist when object is not visible
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Exist on MobiEdit when object is visible" & VBNewLine
Environment("Description") = " Verify method when object is not visible"
Environment("ExpectedResult") = "Exist should return False when object is not visible."
blnResult = VerifyExist(objMobiEdit, False, 10)

' Step44: Execute 'WaitProperty when object is not visible
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute WaitProperty on MobiEdit when object is not  visible." & VBNewLine
Environment("Description") = "Verify waitproperty when object is not visible"
Environment("ExpectedResult") = "WaitProperty should wait for the property to attain a value and return False"
blnResult = VerifyWaitProperty(objMobiEdit, "accessibilitylabel", "Username Field" , 5000, False)

' Step45:  Execute  CheckProperty when object is not  visible
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute  CheckProperty when object is not visible" & VBNewLine
Environment("Description") = " Execute method to check property value when object is not visible"
Environment("ExpectedResult") = "CheckProperty should wait for the property to attain a value."
blnResult = VerifyCheckProperty(objMobiEdit, "accessibilitylabel", "Username Field" , 5000, False)

'Navigate back to object screen
LogOut

'#########################################################
'End test iteration
EndTestIteration()












