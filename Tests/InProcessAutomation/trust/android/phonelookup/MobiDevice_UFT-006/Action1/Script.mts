'##########################################################################################################
' Objective: Login to the PhoneLookup app and test MobiDevice
' Test Description: Execute all MobiDevice methods on Controls screen
'##########################################################################################################
' Step1: Navigate to Controls screen
' Step2: Execute CaptureBitmap with .png format
' Step3: Execute CaptureBitmap with .bmp format
' Step4: Execute CaptureBitmap to override an .bmp image
' Step5: Execute CaptureBitmap to override an .png image
' Step6: Execute CheckProperty
' Step7: Execute ChildObjects recursively
' Step8: Execute ChildObjects non-recursively
' Step9: Execute Click with  Boundary coordinates at Top-Left corner
' Step10: Execute Click with  Boundary coordinates at Top-Right corner
' Step11: Execute Click with  Boundary coordinates at Bottom-Left corner
' Step12: Execute Click with  Boundary coordinates at Bottom-Right corner
' Step13: Execute Click with  Random coordinates
' Step14: Execute Click without coordinates
' Step15: Execute Click  at only one co-ordinate (Only X)
' Step16: Execute Click  at only one co-ordinate (Only Y)
' Step17: Execute Click  at  any valid value
' Step18: Execute DblClick with  Boundary coordinates
' Step19: Execute DblClick with  Random coordinates
' Step20: Execute DblClick without coordinates
' Step21: Execute DblClick  at only one co-ordinate (Only X)
' Step22: Execute DblClick  at only one co-ordinate (Only Y)
' Step23: Execute DblClick  at  any valid value
' Step24: Execute Exist
' Step25: Execute GetROProperty
' Step26: Execute GetTOProperties
' Step27: Execute GetTOProperty
' Step28: Execute GetTextLocation with text
' Step29: Execute GetTextLocation without  text
' Step30: Execute GetVisibleText  without Co-ordinates
' Step31: Execute GetVisibleText  with Co-ordinates
' Step32: Execute LongClick  with valid lapse and without co-ordinates
' Step33: Execute LongClick  with valid lapse and with boundary coordinates
' Step34 :Execute LongClick  with valid lapse and with random coordinates
' Step35: Execute LongClick  with valid lapse and with valid coordinates
' Step36: Execute LongClick  with valid lapse and with only x coordinates
' Step37: Execute LongClick  with valid lapse and with only y coordinates
' Step38: Execute LongClick  with invalid lapse and without coordinates
' Step39: Execute Minimize when window is activated
' Step40: Execute Restore
' Step41: Execute RefreshObject
' Step42: Execute Swipe down
' Step43: Execute Swipe up
' Step44: Execute Swipe with directions as edown and velocity eFast
' Step45: Execute  Swipe with directions as eup and velocity eSlow
' Step46: Execute Swipe with directions as edown and velocity eMedium and starting percentage as 40(0-99)
' Step47: Execute Swipe with directions as eup and velocity eFast and starting percentage as 40(0-99)
' Step48: Execute Swipe with directions as edown and velocity eSlow and starting percentage as 30 and ending percentage as 70 
' Step49: Execute Swipe with directions as eup and velocity eMedium and starting percentage as 30 and ending percentage as 70 
' Step50: Execute Swipe eright
' Step51: Execute Swipe eleft
' Step52: Execute Swipe with directions as eright and velocity eFast
' Step53: Execute  Swipe with directions as eleft and velocity eSlow
' Step54: Execute Swipe with directions as eright and velocity eMedium and starting percentage as 20(0-99)
' Step55: Execute Swipe with directions as eleft and velocity eFast and starting percentage as 20(0-99)
' Step56: Execute Swipe with directions as eright and velocity eSlow and starting percentage as 15 and ending percentage as 85 
' Step57: Execute Swipe with directions as eleft and velocity eMedium and starting percentage as 15 and ending percentage as 85
' Step58: Execute ToString
' Step59: Execute WaitProperty 
' Step60: Execute SetTOProperty
' Step61: Execute ButtonPress menu
' Step62: Execute ButtonPress back
' Step63: Execute ButtonPress without any parameters
' Step64: Execute Type
' Step65: Execute Activate 
' Step66: Execute Scale with Blank Value
' Step67: Execute Scale with a string Value
' Step68: Execute Scale with a float/Double Value
' Step69: Execute Scale with less than 25 Value
' Step70: Execute Scale with greater than 100 Value
' Step71: Execute Scale with valid Value 25
' Step72: Execute Scale with valid Value 80
' Step73: Execute Scale with valid Value 100

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
intSubStep = 0

'Set object for MobiDevice 
Set objMobiDevice = MobiDevice("Phone Lookup")

'Create an html report template
CreateReportTemplate()
'#######################################################

' Step1: Navigate to Search screen
'Expected Result: Controls screen should be displayed
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & ": " &_
"Navigate to Search screen" & VBNewLine
Environment("ExpectedResult") = "Controls screen should be displayed"
'Set object for MobiDevice 
Set objMobiDevice = MobiDevice("Phone Lookup")
NavigateScreenOnPhoneLookup "Search" , objMobiDevice , ""

'#######################################################

' Step2:  Execute CaptureBitmap with .png format
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute CaptureBitmap with .png format" & VBNewLine
Environment("Description") = "CaptureBitMap : Execute method to capture image in .png format"
Environment("ExpectedResult") = "Image should get captured in .png format"
strResult = VerifyCaptureBitmap(objMobiDevice , "png")

' Step3:  Execute CaptureBitmap with .bmp format
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute CaptureBitmap with .bmp format" & VBNewLine
Environment("Description") = "CaptureBitMap : Execute method to capture image in .bmp format"
Environment("ExpectedResult") = "Image should get captured in .bmp format"
strResult = VerifyCaptureBitmap(objMobiDevice , "bmp")

' Step4:  Execute CaptureBitmap to override an .bmp image
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute CaptureBitmap  to override an .bmp image" & VBNewLine
Environment("Description") = "CaptureBitMap : Execute method  to override an .bmp image"
Environment("ExpectedResult") = "Override error message should be thrown"
strResult = VerifyCaptureBitmap(objMobiDevice , "override_bmp")

' Step5:  Execute CaptureBitmap to override an .png image
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute CaptureBitmap  to override an .png image" & VBNewLine
Environment("Description") = "CaptureBitMap : Execute method  to override an .png image"
Environment("ExpectedResult") =  "Override error message should be thrown"
strResult = VerifyCaptureBitmap(objMobiDevice , "override_png")

' Step6:  Execute CheckProperty
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute CheckProperty method on MobiDevice"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute CheckProperty on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "CheckProperty should wait for the property to attain a value and report the result."
strResult =  VerifyCheckProperty(objMobiDevice, "name","Phone Lookup", 5000, True)

' Step7: Execute ChildObjects recursively
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Childobjects method on MobiDevice recursively"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute ChildObjects on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "ChildObjects should return the count of children recursively (if any)."
strResult = VerifyChildObjects(objMobiDevice,"recursive",21)

' Step8: Execute ChildObjects non-recursively
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Childobjects method on MobiDevice non-recursively"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute ChildObjects on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "ChildObjects should return the count of children non-recursively (if any)."
strResult = VerifyChildObjects(objMobiDevice,"nonrecursive",7)

'Navigate to Controls Screen
NavigateScreenOnPhoneLookup "Controls" , objMobiDevice , ""

' Step9: Execute Click with  Boundary coordinates at Top-Left corner
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Click on MobiDevice with Boundary coordinates." & VBNewLine
Environment("Description") = "Click : Execute method with boundary co-ordinates at Top-Left corner"
Environment("ExpectedResult") = "Click should work correctly."
strResult = VerifyClick(objMobiDevice, "withboundarycoordsTopLeft")
GoToScreen "Controls"

' Step10: Execute Click with  Boundary coordinates at Top-Right corner
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Click on MobiDevice with Boundary coordinates." & VBNewLine
Environment("Description") = "Click : Execute method with boundary co-ordinates at Top-Right corner"
Environment("ExpectedResult") = "Click should work correctly."
strResult = VerifyClick(objMobiDevice, "withboundarycoordsTopRight")
GoToScreen "Controls"

' Step11: Execute Click with  Boundary coordinates at Bottom-Left corner
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Click on MobiDevice with Boundary coordinates." & VBNewLine
Environment("Description") = "Click : Execute method with boundary co-ordinates at Bottom-Left corner"
Environment("ExpectedResult") = "Click should work correctly."
strResult = VerifyClick(objMobiDevice, "withboundarycoordsBottomLeft")
GoToScreen "Controls"

' Step12: Execute Click with  Boundary coordinates at Bottom-Right corner
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Click on MobiDevice with Boundary coordinates." & VBNewLine
Environment("Description") = "Click : Execute method with boundary co-ordinates at Bottom-Right corner"
Environment("ExpectedResult") = "Click should work correctly."
strResult = VerifyClick(objMobiDevice, "withboundarycoordsBottomRight")
GoToScreen "Controls"

' Step13: Execute Click with  Random coordinates
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Click on MobiDevice with Random coordinates." & VBNewLine
Environment("Description") = "Click : Execute method with Random co-ordinates"
Environment("ExpectedResult") = "Click should work correctly."
strResult = VerifyClick(objMobiDevice, "withrandomcoords")
GoToScreen "Controls"

' Step14: Execute Click without coordinates
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Click on MobiDevice without coordinates." & VBNewLine
Environment("Description") = "Click : Execute method without  co-ordinates"
Environment("ExpectedResult") = "Click should work correctly."
strResult =  VerifyClick(objMobiDevice, "withoutcoords")
GoToScreen "Controls"

' Step15 : Execute Click  at only one co-ordinate (Only X)
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Click on MobiDevice with only X coordinate" & VBNewLine
Environment("Description") = "Click : Execute method with only X co-ordinate"
Environment("ExpectedResult") = "Click should work correctly."
strResult =  VerifyClick(objMobiDevice, "withxvalue")
GoToScreen "Controls"

' Step16: Execute Click  at only one co-ordinate (Only Y)
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Click on MobiDevice with only Y coordinate" & VBNewLine
Environment("Description") = "Click : Execute method with only Y co-ordinate"
Environment("ExpectedResult") = "Click should work correctly."
strResult =  VerifyClick(objMobiDevice, "withyvalue")
GoToScreen "Controls"

' Step17: Execute Click  at  any valid value
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Click on MobiDevice at  any valid value." & VBNewLine
Environment("Description") = "Click : Execute method with any valid co-ordinates"
Environment("ExpectedResult") = "Click should work correctly."
strResult =  VerifyClick(objMobiDevice, "withvalidvalue")
GoToScreen "Controls"

' Step18: Execute DblClick with  Boundary coordinates
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute DblClick on MobiDevice with Boundary coordinates." & VBNewLine
Environment("Description") = "DblClick : Execute method with boundary co-ordinates"
Environment("ExpectedResult") = "DblClick should work correctly."
strResult = VerifyDblClick(objMobiDevice, "withboundarycoords")
GoToScreen "Controls"

' Step19: Execute DblClick with  Random coordinates
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute DblClick on MobiDevice with Random coordinates." & VBNewLine
Environment("Description") = "DblClick : Execute method with Random co-ordinates"
Environment("ExpectedResult") = "DblClick should work correctly."
strResult = VerifyDblClick(objMobiDevice, "withrandomcoords")
GoToScreen "Controls"

' Step20: Execute DblClick without coordinates
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute DblClick on MobiDevice without coordinates." & VBNewLine
Environment("Description") = "DblClick : Execute method without  co-ordinates"
Environment("ExpectedResult") = "DblClick should work correctly."
strResult =  VerifyDblClick(objMobiDevice, "withoutcoords")
GoToScreen "Controls"

' Step21: Execute DblClick  at only one co-ordinate (Only X)
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute DblClick on MobiDevice with only X coordinate" & VBNewLine
Environment("Description") = "DblClick : Execute method with only X co-ordinate"
Environment("ExpectedResult") = "DblClick should work correctly."
strResult =  VerifyDblClick(objMobiDevice, "withonlyxcoord")
GoToScreen "Controls"

' Step22: Execute DblClick  at only one co-ordinate (Only Y)
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute DblClick on MobiDevice with only Y coordinate" & VBNewLine
Environment("Description") = "DblClick : Execute method with only Y co-ordinate"
Environment("ExpectedResult") = "DblClick should work correctly."
strResult =  VerifyDblClick(objMobiDevice, "withonlyycoord")
GoToScreen "Controls"

' Step23: Execute DblClick  at  any valid value
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute DblClick on MobiDevice at  any valid value." & VBNewLine
Environment("Description") = "DblClick : Execute method with any valid co-ordinates"
Environment("ExpectedResult") = "DblClick should work correctly."
strResult =  VerifyDblClick(objMobiDevice, "withvalidvalues")
GoToScreen "Controls"

' Step24: Execute Exist
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Exist method on MobiDevice"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Exist on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "Exist should work correctly."
strResult = VerifyExist(objMobiDevice, True, 5)

' Step25 : Execute GetROProperty
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute GetROProperty method on MobiDevice"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute GetROProperty on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "GetROProperty should get the correct run-time value for a property."
arrProp = Array("name")
arrpropval = Array("Phone Lookup")
strResult = VerifyGetROProperty(objMobiDevice, arrProp,arrpropval)

'Step26: Execute GetTOProperties
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute GetTOProperties method on MobiDevice"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute GetTOProperties on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "GetTOProperties should get all properties for an object that are used for description."
arrProps = Array("name")
strResult = VerifyGetTOProperties(objMobiDevice, arrProps)

' Step27: Execute GetTOProperty
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute GetTOProperty method on MobiDevice"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute GetTOProperty on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "GetTOProperty should return the correct value for the test object property."
arrProp = Array("name")
arrPropVal = Array("Phone Lookup")
strResult =  VerifyGetTOProperty(objMobiDevice, arrProp, arrPropVal)

' Step28: Execute GetTextLocation with text
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute GetTextLocation method with text  on MobiDevice"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute GetText:Location on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "GetTextLocation returns location of text."

'Make screen in view
MobiDevice("Phone Lookup").MobiList("List").Scroll eTOP
Wait 2
strText = MobiDevice("Phone Lookup").MobiElement("ListView").GetVisibleText
strResult = VerifyGetTextLocation(objMobiDevice , strText , True)

' Step29: Execute GetTextLocation without  text
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute GetTextLocation method without  text  on MobiDevice"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute GetText:Location on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "Proper error mesasge should be displayed."
strResult = VerifyGetTextLocation(objMobiDevice ,"" , False)

' Step30: Execute GetVisibleText  without Co-ordinates
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute GetVisibleText method without  coordinates  on MobiDevice"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute GetVisibleText without co-ordinates  on MobiDevice" & VBNewLine
Environment("ExpectedResult") = "GetVisibleText returns visible text on object  passed"
strResult = VerifyGetVisibleText(objMobiDevice , False)

' Step31: Execute GetVisibleText  with Co-ordinates
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute GetVisibleText method with coordinates  on MobiDevice"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute GetVisibleText with co-ordinates on MobiDevice" & VBNewLine
Environment("ExpectedResult") = "GetVisibleText returns visible text on object  passed"
strResult =VerifyGetVisibleText(objMobiDevice , True)

' Step32: Execute LongClick  with valid lapse and without co-ordinates
'##########################################################
'LongClick
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute LongClick  method with valid lapse and without coordinates on MobiDevice"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute LongClick  without co-ordinates on MobiDevice" & VBNewLine
Environment("ExpectedResult") = "Simulate a press gesture on mobi object"
strResult = VerifyLongClick(objMobiDevice ,"validlapsewithoutcoords")
GoToScreen  "Controls"

' Step33: Execute LongClick  with valid lapse and with boundary coordinates
'################################################################
'LongClick
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute LongClick method with valid lapse and with boundary coordinates on MobiDevice"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute LongClick  without co-ordinates on MobiDevice" & VBNewLine
Environment("ExpectedResult") = "Simulate a press gesture on mobi object"
strResult = VerifyLongClick(objMobiDevice ,"validlapseboundarycoords")
GoToScreen  "Controls"

' Step34 :Execute LongClick  with valid lapse and with random coordinates
'################################################################
'LongClick
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute LongClick method with valid lapse and with random coordinates on MobiDevice"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute LongClick  without co-ordinates on MobiDevice" & VBNewLine
Environment("ExpectedResult") = "Simulate a press gesture on mobi object"
strResult = VerifyLongClick(objMobiDevice ,"validlapserandomcoords")
GoToScreen  "Controls"

' Step35: Execute LongClick  with valid lapse and with valid coordinates
'################################################################
'LongClick
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute LongClick method with valid lapse and with valid coordinates on MobiDevice"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute LongClick  without co-ordinates on MobiDevice" & VBNewLine
Environment("ExpectedResult") = "Simulate a press gesture on mobi object"
strResult = VerifyLongClick(objMobiDevice ,"withvalidlapsevalidvalue")
GoToScreen  "Controls"

' Step36: Execute LongClick  with valid lapse and with only x coordinates
'################################################################
'LongClick
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute LongClick method with valid lapse and with only x coordinates on MobiDevice"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute LongClick  without co-ordinates on MobiDevice" & VBNewLine
Environment("ExpectedResult") = "Simulate a press gesture on mobi object"
strResult = VerifyLongClick(objMobiDevice ,"validlapsexcoords")
GoToScreen  "Controls"

' Step37: Execute LongClick  with valid lapse and with only y coordinates
'################################################################
'LongClick
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute LongClick method with valid lapse and with only y coordinates on MobiDevice"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute LongClick  without co-ordinates on MobiDevice" & VBNewLine
Environment("ExpectedResult") = "Simulate a press gesture on mobi object"
strResult = VerifyLongClick(objMobiDevice ,"validlapseycoords")
GoToScreen  "Controls"

' Step38: Execute LongClick  with invalid lapse and without coordinates
'################################################################
'LongClick
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute LongClick method with invalid lapse and without coordinates on MobiDevice"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute LongClick  without co-ordinates on MobiDevice" & VBNewLine
Environment("ExpectedResult") = "Simulate a press gesture on mobi object"
strResult = VerifyLongClick(objMobiDevice ,"withinvalidlapsetime")
GoToScreen  "Controls"

' Step39: Execute Minimize when window is activated
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Minimize method on activated viewer window"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Minimize  on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "Should Minimize the viewer window"
strResult =  VerifyMinimize(objMobiDevice )

' Step40: Execute Restore
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Restore method on Mobidevice"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Restore  on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "Restores the minimized window"
strResult = VerfiyRestore(objMobiDevice)

' Step41: Execute RefreshObject
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute RefreshObject  method on Mobidevice"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute RefreshObject  on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "RefreshObject re-identifies the object in the application"
strResult = VerifyRefreshObject(objMobiDevice)

' Step42: Execute Swipe down
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Swipe edown"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "Simulates a swipe edown gesture on a Mobi Device"
Set objControl = MobiDevice("Phone Lookup").MobiElement("TabHost")
strResult = VerifySwipe(objMobiDevice ,eDOWN ,,,,objControl)

' Step43: Execute Swipe up
'#######################################################
'Scrolling the list to bottom
MobiDevice("Phone Lookup").MobiList("List").Scroll eBOTTOM
wait 2
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Swipe up"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "Simulates a Swipe up gesture on a Mobi Device"
Set objControl = MobiDevice("Phone Lookup").MobiElement("Button")
strResult = VerifySwipe(objMobiDevice , eUP , , , , objControl)

' Step44:  Execute Swipe with directions as edown and velocity eFast
''#######################################################
'Scrolling the list to top
'MobiDevice("Phone Lookup").MobiList("List").Scroll  eTOP
'wait 2
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Swipe with directions as edown and velocity eFast"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "Simulates a gesture on  Mobi Device with direction edown and velocity efast "
Set objControl = MobiDevice("Phone Lookup").MobiElement("TabHost")
strResult = VerifySwipe(objMobiDevice , eDOWN , eFAST  , , ,objControl)

' Step45:  Execute  Swipe with directions as eup and velocity eSlow
'#######################################################
'Scrolling the list to bottom
'MobiDevice("Phone Lookup").MobiList("List").Scroll  eBOTTOM
'wait 2
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiDevice." & VBNewLine
Environment("Description") = "Execute  Swipe with directions as eup and velocity eSlow"
Environment("ExpectedResult") = "Simulates a gesture on a Mobi Device with direction eup and velocity eSlow"
Set objControl = MobiDevice("Phone Lookup").MobiElement("Button")
strResult = VerifySwipe(objMobiDevice  , eUP ,eSLOW ,  , ,objControl)

' Step46: Execute Swipe with direction as edown and velocity eMedium and starting percentage as 40(0-99)
''#######################################################
'Scrolling the list to top
'MobiDevice("Phone Lookup").MobiList("List").Scroll  eTOP
'wait 2
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Swipe with direction as edown and velocity eMedium and starting percentage as 40"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "Simulates a gesture on Mobi Device with direction as edown and velocity eMedium and starting percentage as 40"
Set objControl = MobiDevice("Phone Lookup").MobiElement("TabHost")
strResult = VerifySwipe(objMobiDevice , eDOWN , eMEDIUM  , 40 , ,objControl)

' Step47: Execute Swipe with direction as eup and velocity eFast and starting percentage as 40(0-99)
'#######################################################
'Scrolling the list to bottom
'MobiDevice("Phone Lookup").MobiList("List").Scroll  eBOTTOM
'wait 2
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiDevice." & VBNewLine
Environment("Description") = "Execute Swipe with direction as eup and velocity eFast and starting percentage as 40"
Environment("ExpectedResult") = "Simulates a gesture on a Mobi Device with direction as eup and velocity eFast and starting percentage as 40"
Set objControl = MobiDevice("Phone Lookup").MobiElement("Button")
strResult = VerifySwipe(objMobiDevice  , eUP ,eFAST , 40 , ,objControl)

' Step48: Execute Swipe with directions as edown and velocity eSlow and starting percentage as 30 and ending percentage as 70 
''#######################################################
'Scrolling the list to top
'MobiDevice("Phone Lookup").MobiList("List").Scroll  eTOP
'wait 2
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Swipe with directions as edown and velocity eSlow and starting percentage as 30 and ending percentage as 70"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "Simulates a gesture on  Mobi Device with directions as edown and velocity eSlow and starting percentage as 30 and ending percentage as 70 "
Set objControl = MobiDevice("Phone Lookup").MobiElement("TabHost")
strResult = VerifySwipe(objMobiDevice , eDOWN , eSLOW  , 30 , 70 ,objControl)

' Step49: Execute Swipe with directions as eup and velocity eMedium and starting percentage as 30 and ending percentage as 70 
'#######################################################
'Scrolling the list to bottom
'MobiDevice("Phone Lookup").MobiList("List").Scroll  eBOTTOM
'wait 2
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiDevice." & VBNewLine
Environment("Description") = "Execute Swipe with directions as eup and velocity eMedium and starting percentage as 30 and ending percentage as 70"
Environment("ExpectedResult") = "Simulates a gesture on a Mobi Device with directions as eup and velocity eMedium and starting percentage as 30 and ending percentage as 70"
Set objControl = MobiDevice("Phone Lookup").MobiElement("Button")
strResult = VerifySwipe(objMobiDevice  , eUP ,eMEDIUM , 30 , 70 ,objControl)

'Launch Horizontal scroll view 
MobiDevice("Phone Lookup").MobiList("List").Select "HorizontalScrollView"
wait 1
Set objControl = MobiDevice("Phone Lookup").MobiElement("ScrollView_Left")

' Step50:  Execute Swipe eright
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Swipe eright"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "Simulates a swipe eright gesture on a MobiDevice"
strResult = VerifySwipe(objMobiDevice  , eRIGHT,  , , ,objControl)

' Step51:  Execute Swipe eleft
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Swipe eleft"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "Simulates a Swipe eleft  gesture on a MobiDevice"
strResult = VerifySwipe(objMobiDevice , eLEFT  , , , , objControl)

' Step52: Execute Swipe with directions as eright and velocity eFast
''#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Swipe with directions as eright and velocity eFast"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "Simulates a gesture on MobiDevice with direction eright and velocity efast "
strResult = VerifySwipe(objMobiDevice , eRIGHT , eFAST , , ,objControl)

' Step53: Execute  Swipe with directions as eleft and velocity eSlow
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute  Swipe with directions as eleft and velocity eSlow"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "Simulates a gesture on a MobiDevice with direction eleft and velocity efast"
strResult = VerifySwipe(objMobiDevice, eLEFT ,eSLOW ,  , ,objControl)

' Step54: Execute Swipe with directions as eright and velocity eMedium and starting percentage as 20(0-99)
''#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Swipe with directions as eright and velocity eMedium and starting percentage as 20"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "Simulates a gesture on MobiDevice with directions as eright and velocity eMedium and starting percentage as 20 "
strResult = VerifySwipe(objMobiDevice , eRIGHT , eMEDIUM , 20 , ,objControl)


' Step55: Execute Swipe with directions as eleft and velocity eFast and starting percentage as 20(0-99)
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Swipe with directions as eleft and velocity eFast and starting percentage as 20"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "Simulates a gesture on a MobiDevice with directions as eleft and velocity eFast and starting percentage as 20"
strResult = VerifySwipe(objMobiDevice  ,eLEFT ,eFAST,20 , ,objControl)


' Step56: Execute Swipe with directions as eright and velocity eSlow and starting percentage as 15 and ending percentage as 85
''#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Swipe with directions as eright and velocity eSlow and starting percentage as 15 and ending percentage as 85"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "Simulates a gesture on MobiDevice with directions as eright and velocity eSlow and starting percentage as 15 and ending percentage as 85 "
strResult = VerifySwipe(objMobiDevice , eRIGHT , eSLOW ,15,85,objControl)


' Step57: Execute Swipe with directions as eleft and velocity eMedium and starting percentage as 15 and ending percentage as 85
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Swipe with directions as eleft and velocity eMedium and starting percentage as 15 and ending percentage as 85"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "Simulates a gesture on a MobiDevice with directions as eleft and velocity eMedium and starting percentage as 15 and ending percentage as 85"
strResult = VerifySwipe(objMobiDevice  ,eLEFT ,eMEDIUM,15,85,objControl)

' Step58: Execute 'ToString
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute TOString method on MobiDevice"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute TOString on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "TOString should return the object type and class."
strResult =  VerifyTOString(objMobiDevice)

' Step59: Execute 'WaitProperty 
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute WaitProperty method on MobiDevice"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute WaitProperty on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "WaitProperty should wait for the property to attain a value but shouldn't report the result."
strResult = VerifyWaitProperty(objMobiDevice, "name" , "Phone Lookup", 5000, True)

' Step60: Execute SetTOProperty
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute SetTOProperty method on MobiDevice"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute SetTOProperty on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "SetTOProperty should set the value of the test object property."
arrProp = Array("name")
strResult = VerifySetTOProperty(objMobiDevice,  arrProp)

'Navigate back to Controls List
objMobiDevice.ButtonPress eBACK
wait 1

' Step61: Execute ButtonPress menu
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute ButtonPress method for Menu on MobiDevice"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute ButtonPress menu." & VBNewLine
Environment("ExpectedResult") = "Simulates pressing a harware button Menu  on mobidevice ."
strResult = VerifyButtonPress(objMobiDevice , "menu")

' Step62: Execute ButtonPress back
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute ButtonPress method for Back on MobiDevice"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute ButtonPress back" & VBNewLine
Environment("ExpectedResult") = "Simulates pressing a harware button Back on mobidevice ."
strResult = VerifyButtonPress(objMobiDevice , "back")

' Step63: Execute ButtonPress without any parameters
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute ButtonPress method for Back on MobiDevice"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute ButtonPress back" & VBNewLine
Environment("ExpectedResult") = "Proper error message should be thrown ."
strResult = VerifyButtonPress(objMobiDevice , " ")

' Step64: Execute Type
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Type method on MobiDevice"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Type." & VBNewLine
Environment("ExpectedResult") = "Type on Device window."
'LogOut from screen
Flag = LogOut 
strResult =VerifyType(objMobiDevice , "text" )

' Step65: Execute Activate 
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Activate method on MobiDevice"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Activate on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "Activates the window"
strResult =  VerifyActivate(objMobiDevice)

IntScale = objMobiDevice.GetROProperty("viewerscale")

' Step66: Execute Scale with Blank Value
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Scale method with Blank Value on MobiDevice"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Scale method with Blank Value on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "Scale method with Blank Value should throw an error"
strResult = VerifyScale(objMobiDevice,"")

' Step67: Execute Scale with a string Value
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Scale method with String Value on MobiDevice"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Scale method with String Value on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "Scale method with string Value should throw an error"
strResult = VerifyScale(objMobiDevice,"Hello")

' Step68: Execute Scale with a float/Double Value
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Scale method with float/Double Value on MobiDevice"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Scale method with float/Double Value on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "Scale method with float/Double Value should throw an error"
strResult = VerifyScale(objMobiDevice,56.9)

' Step69: Execute Scale with less than 25 Value
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Scale method with less than 25 Value on MobiDevice"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Scale method with less than 25 Value on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "Scale method with less than 25 Value should throw an error"
strResult = VerifyScale(objMobiDevice,10)

' Step70: Execute Scale with greater than 100 Value
' #######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Scale method with greater than 100 Value on MobiDevice"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Scale method with greater than 100 Value on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "Scale method with greater than 100 Value should throw an error"
strResult = VerifyScale(objMobiDevice,500)

' Step71: Execute Scale with valid Value 25
' #######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Scale method with valid Value 25 on MobiDevice"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Scale method with valid Value 25 on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "Scale method with valid Value 25 should change the scale to 25"
strResult = VerifyScale(objMobiDevice,25)

' Step72: Execute Scale with valid Value 80
' #######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Scale method with valid Value 80 on MobiDevice"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Scale method with valid Value 80 on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "Scale method with valid Value 80 should change the scale to 80"
strResult = VerifyScale(objMobiDevice,80)

' Step73: Execute Scale with valid Value 100
' #######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Scale method with valid Value 100 on MobiDevice"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Scale method with valid Value 100 on MobiDevice." & VBNewLine
Environment("ExpectedResult") = "Scale method with valid Value 100 should change the scale to 100"
strResult = VerifyScale(objMobiDevice,100)

'*********************************************************************************************************************
objMobiDevice.Scale Cint(IntScale)
wait 1

'End test iteration
EndTestIteration()

































































































