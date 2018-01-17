''Verify MobiElement  object methods

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
'#######################################################

' Step: Navigate to Controls screen
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & ": " &_
"Navigate to Search screen" & VBNewLine
Environment("ExpectedResult") = "Controls screen should be displayed"

'Set object for Element
Set objMobiElement = MobiDevice("Phone Lookup").MobiElement("AbsoluteLayout")

'Set object for List
Set ObjList = MobiDevice("Phone Lookup").MobiList("List")

''Call function to createreporttemplare
CreateReportTemplate()

'Initial Setup
StrResult = NavigateScreenOnPhoneLookup("Controls" , objMobiElement , "")


'*********************************************************************************************************************
' Step1:Execute CaptureBitmap with .png file
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute CaptureBitmap with .png file"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute CaptureBitmap on MobiElement." & VBNewLine
Environment("ExpectedResult") = "CaptureBitmap should capture the screenshot and save the png file to the defined location."
strResult =  VerifyCaptureBitmap(objMobiElement , "png")


' Step2:Execute CaptureBitmap with .bmp file
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute CaptureBitmap with  .bmp file"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute CaptureBitmap on MobiElement." & VBNewLine
Environment("ExpectedResult") = "CaptureBitmap should capture the screenshot and save the bmp file to the defined location."
strResult =  VerifyCaptureBitmap(objMobiElement , "bmp")


' Step3:Execute CaptureBitmap with .override.bmp file
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute CaptureBitmap with override .png file"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute CaptureBitmap on MobiElement." & VBNewLine
Environment("ExpectedResult") = "CaptureBitmap should throw an error messge for override messagefor .bmp file."
strResult =  VerifyCaptureBitmap(objMobiElement , "override_bmp")

' Step4:Execute CaptureBitmap with .override.png file
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute CaptureBitmap with .png file"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute CaptureBitmap on MobiElement." & VBNewLine
Environment("ExpectedResult") =  "CaptureBitmap should throw an error messge for override message for .png  file."
strResult =  VerifyCaptureBitmap(objMobiElement , "override_png")

' Step 5 Execute CheckProperty  when object is visible
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute check property when object is visible"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute CheckProperty on MobiElement." & VBNewLine
Environment("ExpectedResult") = "CheckProperty should wait for the property to attain a value and report the result."
strResult = VerifyCheckProperty(objMobiElement, "visible" ,True , 5000, True)


' Step 119 :Execute SetTOProperty
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute SetToProperty"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute SetTOProperty on MobiElement." & VBNewLine
Environment("ExpectedResult") = "SetTOProperty should set the value of the test object property."
arrProps = Array("enabled","text")
strResult = VerifySetTOProperty(objMobiElement, arrProps)

' Step7:  Execute Exist  when object is visible
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Exist method when object is  visible"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Exist on MobiElement." & VBNewLine
Environment("ExpectedResult") = "Exist should work correctly."
strResult = VerifyExist(objMobiElement, True, 5)


' Step9:  Execute GetTOProperties 
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute GetTOProperties method"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute GetTOProperties on MobiElement." & VBNewLine
Environment("ExpectedResult") = "GetTOProperties should get all properties for an object that are used for description."
arrProps = Array("visible","text")
strResult = VerifyGetTOProperties(objMobiElement, arrProps)


' Step10  Execute GetROProperty 
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute GetROProperty method"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute GetROProperty on MobiElement." & VBNewLine
Environment("ExpectedResult") = "GetROProperty should get the correct run-time value for a property."
arrROProps = Array("enabled","text")
arrROvalue= Array (True,"AbsoluteLayout")
strResult =VerifyGetROProperty(objMobiElement, arrROProps, arrROvalue)


' Step11:  Execute GetTOProperty 
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute GetTOProperty method"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute GetTOProperty on MobiElement." & VBNewLine
Environment("ExpectedResult") = "GetTOProperty should return the correct value for the test object property."
arrProps = Array("enabled","text")
arrvalue= Array (True,"AbsoluteLayout")
strResult =VerifyGetTOProperty(objMobiElement, arrProps, arrvalue)


' Step12:  Execute ToString 
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute ToString method"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute ToString on MobiElement." & VBNewLine
Environment("ExpectedResult") = "ToString should return the object type and class."
strResult = VerifyToString(objMobiElement)

' Step13  Execute WaitProperty  when object is visible
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Wait property when object is visible method"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute WaitProperty on MobiElement." & VBNewLine
Environment("ExpectedResult") = "WaitProperty should wait for the property to attain a value but shouldn't report the result."
strResult = VerifyWaitProperty(objMobiElement, "visible", True, 5000, True)


' Step16  Execute RefreshObject 
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Refresh method"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute RefreshObject  on MobiElement." & VBNewLine
Environment("ExpectedResult") = "RefreshObject re-identifies the object in the application"
strResult = VerifyRefreshObject(objMobiElement)

' Step17:  Execute GetVisibleText  with Coordinates
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute GetVisibleText with coordinates "
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute GetvisibleText with coordinates on MobiElement." & VBNewLine
Environment("ExpectedResult") = "GetvisibleText  should return text within specified area."
strResult = VerifyGetVisibleText(objMobiElement , true)

' Step18:  Execute GetVisibleText  without coordinates
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute GetVisibleText without coordinates "
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute GetvisibleText without coordinates on MobiElement." & VBNewLine
Environment("ExpectedResult") = "GetvisibleText  should return text within specified area."
strResult = VerifyGetVisibleText(objMobiElement ,False)


' 'Step 13:  Execute Click  with boundary coordinates at Top-Left corner
''#######################################################

intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Click : Execute Click with boundary coordinates at Top-Left corner on MobiList."
'Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
'"Execute Click on MobiEdit." & VBNewLine
Environment("ExpectedResult") = "Click should work correctly."
blnFlag = VerifyClick(objMobiElement ,"withboundarycoordsTopLeft")
GoToScreen "Controls"
'
'' Step 13:  Execute Click  with boundary coordinates at Top-Right corner
''#######################################################
'
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Click : Execute Click with boundary coordinates at Top-Right corner on MobiList."
'Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
'"Execute Click on MobiEdit." & VBNewLine
Environment("ExpectedResult") = "Click should work correctly."
blnFlag = VerifyClick(objMobiElement,"withboundarycoordsTopRight")
GoToScreen "Controls"
'
'' Step 13:  Execute Click  with boundary coordinates at Bottom-Left corner
''#######################################################
'
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Click : Execute Click with boundary coordinates at Bottom-Left corner on MobiList"
'Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
'"Execute Click on MobiEdit." & VBNewLine
Environment("ExpectedResult") = "Click should work correctly."
blnFlag = VerifyClick(objMobiElement,"withboundarycoordsBottomLeft")
GoToScreen "Controls"
'
' Step 13:  Execute Click  with boundary coordinates at Bottom-Right corner
'#######################################################

intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Click : Execute Click with boundary coordinates at Bottom-Right corner on MobiDropdown."
'Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
'"Execute Click on MobiEdit." & VBNewLine
Environment("ExpectedResult") = "Click should work correctly."
blnFlag = VerifyClick(objMobiElement,"withboundarycoordsBottomRight")
GoToScreen "Controls"




'22'Execute Click   Without coordinates
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Click method Without coordinates"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Click on MobiElement." & VBNewLine
Environment("ExpectedResult") = "Click should work correctly."
strResult = VerifyClick(objMobiElement, "withoutcoords")

GoToScreen "Controls"


'24'Execute Click with  x coordinates
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Click method with x coordinates"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Click on MobiElement." & VBNewLine
Environment("ExpectedResult") = "Click should work correctly."
strResult = VerifyClick(objMobiElement, "withxvalue")

GoToScreen "Controls"

'25'Execute Click with  y coordinates
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Click method with y coordinates"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Click on MobiElement." & VBNewLine
Environment("ExpectedResult") = "Click should work correctly."
strResult = VerifyClick(objMobiElement, "withyvalue")

GoToScreen "Controls"


'26'Execute Click with  Valid X & Y coordinates
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Click method with Valis x & y coordinates"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Click on MobiElement." & VBNewLine
Environment("ExpectedResult") = "Click should work correctly."
strResult = VerifyClick(objMobiElement, "withvalidvalue")

GoToScreen "Controls"


'27'Execute Click with  Random coordinates
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Click method with Random coordinates"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Click on MobiElement." & VBNewLine
Environment("ExpectedResult") = "Click should work correctly."

strResult = VerifyClick(objMobiElement, "withrandomcoords")

GoToScreen "Controls"


' Step 28:  Execute LongClick with VAlid Lapse without coordinates
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute LongClick with VAlid Lapse without coordinates"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute LongClick with Boundary  coordinates on MobiElement." & VBNewLine
Environment("ExpectedResult") = "LongClick should trigger press event on  the mobile device window for the specified time"

strResult = VerifyLongClick(objMobiElement  , "validlapsewithoutcoords")
wait 2

GoToScreen "Controls"

' Step 29:  Execute LongClick With Valid Lapse At 0,0 Coordinates
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute LongClick With Valid Lapse At 0,0 Coordinates"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute LongClick with Boundary  coordinates on MobiElement." & VBNewLine
Environment("ExpectedResult") = "LongClick should trigger press event on  the mobile device window for the specified time"

strResult = VerifyLongClick(objMobiElement  , "validlapsezerocoords")
wait 2

GoToScreen "Controls"

' Step 30:  Execute LongClick With Valid Lapse At Boundary Coordinates
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute LongClick With Valid Lapse At Boundary Coordinates"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute LongClick with Boundary  coordinates on MobiElement." & VBNewLine
Environment("ExpectedResult") = "LongClick should trigger press event on  the mobile device window for the specified time"

strResult = VerifyLongClick(objMobiElement  , "validlapseboundarycoords")
wait 2

GoToScreen "Controls"


' Step 31: Execute LongClick With Valid Lapse At y and xCoordinates 
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute LongClick With Valid Lapse with y & x coordinates"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute LongClick with Boundary  coordinates on MobiElement." & VBNewLine
Environment("ExpectedResult") ="LongClick should trigger press event on  the mobile device window for the specified time"

strResult = VerifyLongClick(objMobiElement  , "withvalidlapsevalidvalue")

GoToScreen "Controls"


' Step32:  Execute DblClick  with Valid x & y  coordinates
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute DblClick With valid X & Y coords"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute DblClick with Boundary coordinates on MobiElement." & VBNewLine
Environment("ExpectedResult") = "DblClick should work correctly"
strResult = VerifyDblClick(objMobiElement  , "withvalidvalues")

GoToScreen "Controls"

' Step33  Execute DblClick  withoutcoords  
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute DblClick With Valid Lapse At without Coordinates"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute DblClick with Boundary coordinates on MobiElement." & VBNewLine
Environment("ExpectedResult") = "DblClick should work correctly"
strResult = VerifyDblClick(objMobiElement  , "withoutcoords")

GoToScreen "Controls"

' Step34:  Execute DblClick  withboundarycoords
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute DblClick With Valid Lapse At Boundary Coordinates"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute DblClick with Boundary coordinates on MobiElement." & VBNewLine
Environment("ExpectedResult") = "DblClick should work correctly"
strResult = VerifyDblClick(objMobiElement  , "withboundarycoords")

GoToScreen "Controls"

' Step35:  Execute DblClick  withrandomcoords  
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute DblClick With Valid Lapse At random Coordinates"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute DblClick with Boundary coordinates on MobiElement." & VBNewLine
Environment("ExpectedResult") = "DblClick should work correctly"
strResult = VerifyDblClick(objMobiElement  , "withrandomcoords")

GoToScreen "Controls"

' Step36:  Execute DblClick  withzercoords
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute DblClick With Valid Lapse At zero Coordinates"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute DblClick with Boundary coordinates on MobiElement." & VBNewLine
Environment("ExpectedResult") = "DblClick should work correctly"
strResult = VerifyDblClick(objMobiElement  , "withrandomcoords")

GoToScreen "Controls"




' Step38:  Execute DblClick   withonlyxcoord
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute DblClick At x Coordinates"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute DblClick with Boundary coordinates on MobiElement." & VBNewLine
Environment("ExpectedResult") = "DblClick should work correctly"
strResult = VerifyDblClick(objMobiElement  , "withonlyxcoord")

GoToScreen "Controls"

' Step39:  Execute DblClick   withonlyycoord
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute DblClick With Valid Lapse At y Coordinates"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute DblClick with Boundary coordinates on MobiElement." & VBNewLine
Environment("ExpectedResult") = "DblClick should work correctly"
strResult = VerifyDblClick(objMobiElement  , "withonlyycoord")

GoToScreen "Controls"

'*********************************************************************************************************************
' Step40:  Execute GetScrolledText 
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description")  = "Execute GetScrolledText method"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute GetScrolledText on MobiElement." & VBNewLine
Environment("ExpectedResult") = "GetScrolledText should return text of the scrolled window"


Set objMobiElement = MobiDevice("Phone Lookup").MobiElement("ScrollView")
strValue="ScrollView"
If Not objMobiElement.Exist(5) Then
	ScrollToBottom ObjList, strValue 
End If
'Navigate to Scroll view screen
MobiDevice("Phone Lookup").MobiList("List").Select "ScrollView"
wait (2)
Set objMobiElement = MobiDevice("Phone Lookup").MobiElement("elescrollviewTop")
strResult = VerifyGetScrollText(objMobiElement,"mobielement", "false" , "" , "")
wait 2

'Returned back to controls screen
MobiDevice("Phone Lookup").ButtonPress eBACK
wait 3
Set objMobiElement = MobiDevice("Phone Lookup").MobiElement("ScrollView")
'*********************************************************************************************************************
'Step 7:  Execute  ChildObjects recursively
'#######################################################

intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute childobject method"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute RefreshObject  on mobilist." & VBNewLine

Environment("ExpectedResult") = "Return child object recursively in the application"
'blnFlag = VerifyChildObjects(objMobiElement  ,"recursive",26)
blnFlag = VerifyChildObjects(objMobiElement, "recursive" , 0)

 'Step 7:  Execute  ChildObjects non recursively
'#######################################################

intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute childobject method"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute RefreshObject  on mobilist." & VBNewLine

Environment("ExpectedResult") = "Return child object non recursively in the application"
'blnFlag = VerifyChildObjects(objMobiElement,"recursive",100)
blnFlag = VerifyChildObjects(objMobiElement, "nonrecursive" , 0)


' Step41:  Execute GetTextlocation with text
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute GetTextlocation with text"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute GetScrolledText on MobiElement." & VBNewLine
Environment("ExpectedResult") = "GetTextLocation should return the co-ordinates"

Set objMobiElement = MobiDevice("Phone Lookup").MobiElement("AbsoluteLayout")
strValue="AbsoluteLayout"
If Not objMobiElement.Exist(5) Then
	ScrollToTop ObjList, strValue 
End If

strText  =  "AbsoluteLayout"
strResult = VerifyGetTextLocation(objMobiElement, strText , True)
'
'*********************************************************************************************************************

'Created object for Up, Down & Scroll View MobiElements.
Set objBottom = MobiDevice("Phone Lookup").MobiElement("eleDown_Swipe") 
Set objTop = MobiDevice("Phone Lookup").MobiElement("eleUp_Swipe") 
Set objMobiElement=Nothing
wait 1
Set objMobiElement=MobiDevice("Phone Lookup").MobiElement("eleVerticalScrollView")

'Navigate to Scroll view screen
strValue="ScrollView"
If Not MobiDevice("Phone Lookup").MobiElement("ScrollView").Exist(3) Then
	ScrollToBottom ObjList, strValue 
End If
wait 1
MobiDevice("Phone Lookup").MobiList("List").Select "ScrollView"
wait 2

' Step 48:  Execute Swipe down
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Swipe edown"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiElement." & VBNewLine
Environment("ExpectedResult") = "Simulates a swipe edown gesture on a Mobi Element"
strResult = VerifySwipe(objMobiElement ,eDOWN ,,,,objBottom)

' Step 49:  Execute Swipe up
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Swipe up"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiElement." & VBNewLine
Environment("ExpectedResult") = "Simulates a Swipe up gesture on a Mobi Element"
strResult = VerifySwipe(objMobiElement , eUP , , , , objTop)


'' Step 50:  Execute Swipe  with directions as edown and velocity eFast
''#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execut swipe with directions as edown and velocity eFast"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiElement." & VBNewLine
Environment("ExpectedResult") = "Simulates a gesture on  Mobi Element with directions as edown and velocity eFast "
strResult = VerifySwipe(objMobiElement , eDOWN , eFAST  , , ,objBottom)


' Step 51:  Execute  Swipe with directions as eup and velocity eSlow
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiElement." & VBNewLine
Environment("Description") = "Execut swipe with directions as eup and velocity eSlow"
Environment("ExpectedResult") = "Simulates a gesture on a Mobi Element with directions as eup and velocity eSlow"
strResult = VerifySwipe(objMobiElement  , eUP ,eSLOW ,  , ,objTop)


'' Step 52:  Execute Swipe  with directions as edown and velocity eMedium and starting percentage as 40(0-99)
''#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execut swipe with directions as edown and velocity eMedium and starting percentage as 40(0-99)"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiElement." & VBNewLine
Environment("ExpectedResult") = "Simulates a gesture on  Mobi Element with directions as edown and velocity eMedium and starting percentage as 40(0-99) "
strResult = VerifySwipe(objMobiElement , eDOWN , eMEDIUM  ,40 ,  ,objBottom)


' Step 53:  Execute  Swipe with directions as eup and velocity eFast and starting percentage as 40(0-99)
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiElement." & VBNewLine
Environment("Description") = "Execut swipe with directions as eup and velocity eFast and starting percentage as 40(0-99)"
Environment("ExpectedResult") = "Simulates a gesture on a Mobi Element with directions as eup and velocity eFast and starting percentage as 40(0-99)"
strResult = VerifySwipe(objMobiElement  ,eUP ,eFAST , 40 , ,objTop)


'' Step 54:  Execute Swipe  with directions as edown and velocity eSlow and starting percentage as 30 and ending percentage as 70
''#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execut swipe with directions as edown and velocity eSlow and starting percentage as 30 and ending percentage as 70"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiElement." & VBNewLine
Environment("ExpectedResult") = "Simulates a gesture on  Mobi Element with directions as edown and velocity eSlow and starting percentage as 30 and ending percentage as 70 "
strResult = VerifySwipe(objMobiElement , eDOWN , eSLOW ,30 ,70  ,objBottom)


' Step 55:  Execute  Swipe with directions as eup and velocity eMedium and starting percentage as 30 and ending percentage as 70
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiElement." & VBNewLine
Environment("Description") = "Execut swipe with directions as eup and velocity eMedium and starting percentage as 30 and ending percentage as 70"
Environment("ExpectedResult") = "Simulates a gesture on a Mobi Element with directions as eup and velocity eMedium and starting percentage as 30 and ending percentage as 70"
strResult = VerifySwipe(objMobiElement  ,eUP ,eMEDIUM,30,70 ,objTop)

'Back To Control Screen and navigate to horizontalScrollview
wait 1
MobiDevice("Phone Lookup").ButtonPress eBACK
wait 2
Set objMobiElement = Nothing
wait 1
Set objMobiElement = MobiDevice("Phone Lookup").MobiElement("eleHorizontalScrolView")
Set objMobiElement2 = MobiDevice("Phone Lookup").MobiElement("HorizontalScrollView")
strValue="HorizontalScrollView"
If Not objMobiElement2.Exist(5) Then
	ScrollToTop ObjList, strValue 
End If
wait 1
MobiDevice("Phone Lookup").MobiList("List").Select "HorizontalScrollView"
wait 2

Set objMobiDevice = MobiDevice("Phone Lookup")
Set obj_left = MobiDevice("Phone Lookup").MobiElement("ScrollView_Left")
Set obj_Right = MobiDevice("Phone Lookup").MobiElement("ScrollView_Right")

SwipeRight objMobiDevice,obj_Right

' Step 81:  Execute Swipe eLeft
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Execute Swipe eLeft"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiElement." & VBNewLine
Environment("ExpectedResult") = "Simulates a Execute Swipe eLeft  gesture on a Mobi Element"
strResult = VerifySwipe(objMobiElement , eLEFT  , , , , obj_left)


' Step 80:  Execute Swipe eRight
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Swipe eRight"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiElement." & VBNewLine
Environment("ExpectedResult") = "Simulates a Swipe eRight gesture on a Mobi Element"
strResult = VerifySwipe(objMobiElement  , eRIGHT,  , , ,obj_Right)

SwipeRight objMobiDevice,obj_Right

' Step 83:  Execute  Swipe with directions as eLeft and velocity eSlow
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiElement." & VBNewLine
Environment("Description") = "Execut swipe with directions as eLeft and velocity eSlow"
Environment("ExpectedResult") = "Simulates a gesture on a Mobi Element with directions as eLeft and velocity eSlow"
strResult = VerifySwipe(objMobiElement  ,  eLEFT ,eSLOW ,  ,,obj_left)


'' Step 82:  Execute Swipe  with directions as eRight and velocity eFast
''#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execut swipe with directions as eRight and velocity eFast"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiElement." & VBNewLine
Environment("ExpectedResult") = "Simulates a gesture on  Mobi Element with directions as eRight and velocity eFast "
strResult = VerifySwipe(objMobiElement , eRIGHT , eFAST , , ,obj_Right)

SwipeRight objMobiDevice,obj_Right

' Step 85:  Execute  Swipe with directions as eLeft and velocity eFast and starting percentage as 30(0-99)
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiElement." & VBNewLine
Environment("Description") = "Execut swipe with directions as eLeft and velocity eFast and starting percentage as 30(0-99)"
Environment("ExpectedResult") = "Simulates a gesture on a Mobi Element with directions as eLeft and velocity eFast and starting percentage as 30(0-99)"
strResult = VerifySwipe(objMobiElement  ,eLEFT ,eFAST ,30 , ,obj_left)


'' Step 84:  Execute Swipe  with directions as eRight and velocity eMedium and starting percentage as 30(0-99)
''#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execut swipe with directions as eRight and velocity eMedium and starting percentage as 30(0-99)"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiElement." & VBNewLine
Environment("ExpectedResult") = "Simulates a gesture on  Mobi Element with directions as eRight and velocity eMedium and starting percentage as 30(0-99)"
strResult = VerifySwipe(objMobiElement , eRIGHT , eMEDIUM ,30 , ,obj_Right)

SwipeRight objMobiDevice,obj_Right

' Step 87:  Execute  Swipe with directions as eLeft and velocity eMedium and starting percentage as 15 and ending percentage as 85
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiElement." & VBNewLine
Environment("Description") = "Execut swipe with directions as eLeft and velocity eMedium and starting percentage as 15 and ending percentage as 85"
Environment("ExpectedResult") = "Simulates a gesture on a Mobi Element with directions as eLeft and velocity eMedium and starting percentage as 15 and ending percentage as 85"
strResult = VerifySwipe(objMobiElement  ,eLEFT ,eMEDIUM ,15,85,obj_left)

	
'' Step 86:  Execute Swipe  with directions as eRight and velocity eSlow and starting percentage as 15 and ending percentage as 85
''#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execut swipe with directions as eRight and velocity eSlow and starting percentage as 15 and ending percentage as 85"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Swipe on MobiElement." & VBNewLine
Environment("ExpectedResult") = "Simulates a gesture on  Mobi Element with directions as eRight and velocity eSlow and starting percentage as 15 and ending percentage as 85 "
strResult = VerifySwipe(objMobiElement , eRIGHT , eSLOW  ,15 ,85 ,obj_Right)

'returning back to controls screen
wait 2
MobiDevice("Phone Lookup").ButtonPress eBACK
wait 4

Set ObjList= MobiDevice("Phone Lookup").MobiList("List")
Set objMobiElement = MobiDevice("Phone Lookup").MobiElement("AbsoluteLayout")
strValue="AbsoluteLayout"
If Not objMobiElement.Exist(5) Then
	ScrollToTop ObjList, strValue 
End If

' Step 115:  Execute LongClick With Valid Lapse At Random Coordinates
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute LongClick With Valid Lapse at random coordinates"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute LongClick with Boundary  coordinates on MobiElement." & VBNewLine
Environment("ExpectedResult") = "LongClick should trigger press event on  the mobile device window for the specified time"
strResult = VerifyLongClick(objMobiElement  , "validlapserandomcoords")

GoToScreen "Controls"


' Step 117:  Execute LongClick With Valid Lapse At x Coordinates 
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute LongClick With Valid Lapse with x coordinates"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute LongClick with Boundary  coordinates on MobiElement." & VBNewLine
Environment("ExpectedResult") ="LongClick should trigger press event on  the mobile device window for the specified time"
strResult = VerifyLongClick(objMobiElement  , "validlapsexcoords")

GoToScreen "Controls"


' Step 118:  Execute LongClick With Valid Lapse At yCoordinates 
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute LongClick With Valid Lapse with y coordinates"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute LongClick with Boundary  coordinates on MobiElement." & VBNewLine
Environment("ExpectedResult") ="LongClick should trigger press event on  the mobile device window for the specified time"
strResult = VerifyLongClick(objMobiElement  , "validlapseycoords")

LogOut

' Step 6 Execute CheckProperty  when object is not visible
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute check property when object is not  visible"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute CheckProperty on MobiElement." & VBNewLine
Environment("ExpectedResult") = "CheckProperty should return false and  wait for the property to attain a value and report the result."
strResult = VerifyCheckProperty(objMobiElement, "visible" ,True , 15000, False)

' Step8:  Execute Exist  when object is not visible
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Exist method when object is not  visible"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute Exist on MobiElement." & VBNewLine
Environment("ExpectedResult") = "Exist should work correctly and return false."
strResult =VerifyExist(objMobiElement, False, 15)

' Step14:  Execute WaitProperty  when object is not visible
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute wait property when object is not visible method"
Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
"Execute WaitProperty on MobiElement." & VBNewLine
Environment("ExpectedResult") = "WaitProperty should wait for the property to attain a value but shouldn't report the result."
strResult = VerifyWaitProperty(objMobiElement, "visible", True, 15000, False)

'******************************************************************************************************************************************************************

'Call function to end test iteration
EndTestIteration()












