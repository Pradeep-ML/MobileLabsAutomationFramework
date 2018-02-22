'##########################################################################################################
'Objective:Test MobiWebView methods on WebBrowser
' Test Description: Execute all MobiWebView methods 
'##########################################################################################################

'#######################################################
'Declare Variables
Dim strStepsToReproduce
Dim strStepName
Dim intStep
Dim blnResult
Dim strTestName
CreateReportTemplate
'#######################################################

'#######################################################
'Initializations
intStep = 0
Environment("intStepNo") = 0
Environment("Component") = "Web Browser"
Environment("StepsToReproduce") = ""
'#######################################################


'#######################################################
'Input parameters

Set objMobiWebView = MobiDevice("Web Browser").MobiWebView("WebView")
Set objMobiWebEdit = MobiDevice("Web Browser").MobiWebEdit("edTP")

'URL of the application to be opened
'strURL =  "http://qa-content.mobilelabsinc.net/ml.html"
strURL1 = "www.tutorialspoint.com"

OpenURL strURL1 , objMobiWebEdit , 5 

' Step:  Execute CaptureBitmap with .png format
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Verify method for capturing .png image"
Environment("ExpectedResult") = "CaptureBitMap should capture screeshot in .png format"
blnResult = VerifyCaptureBitmap(objMobiWebView , "png")

' Step  Execute CaptureBitmap with .bmp format
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Verify method for capturing .bmp file"
Environment("ExpectedResult") = "CaptureBitMap should capture screeshot in .bmp format"
blnResult = VerifyCaptureBitmap(objMobiWebView , "bmp")

' Step   Execute CaptureBitmap to override .bmp file
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = " Verify override message for already existing .bmp  file"
Environment("ExpectedResult") = "CaptureBitMap should display override message"
blnResult = VerifyCaptureBitmap(objMobiWebView , "override_bmp")

' Step :  Execute CaptureBitmap to override .png file
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Verify override message for already existing .png  file"
Environment("ExpectedResult") = "CaptureBitMap should display override message"
blnResult = VerifyCaptureBitmap(objMobiWebView , "override_png")

' Step 8:  Execute Click without coordinates
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Click without coordinates on MobiWebView."
'Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
'"Execute Click on MobiList." & VBNewLine
Environment("ExpectedResult") = "Click should work correctly."
blnFlag = VerifyClick(objMobiWebView, "withoutcoords")

OpenURL strURL1 , objMobiWebEdit , 5 

' Step 9:  Execute Click with random coordinates 
'#######################################################

intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Click with random coordinates on MobiWebView."
'Environment("StepsToReproduce") = Environment("StepsToReproduce") & Environment("StepName") & "." & intStep & ": " &_
'"Execute Click on MobiList." & VBNewLine
Environment("ExpectedResult") = "Click should work correctly."
blnFlag = VerifyClick(objMobiWebView, "withrandomcoords")

OpenURL strURL1 , objMobiWebEdit , 5 


' Step 10:  Execute Click with x co-ordinates
'#######################################################

intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Click with only x co-ordinates on MobiWebView."
Environment("ExpectedResult") = "Click should work correctly."
blnFlag = VerifyClick(objMobiWebView, "withxvalue")

OpenURL strURL1 , objMobiWebEdit , 5 

' Step 10:  Execute Click with y co-ordinates
'#######################################################

intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Click with only x co-ordinates on MobiWebView."
Environment("ExpectedResult") = "Click should work correctly."
blnFlag = VerifyClick(objMobiWebView, "withyvalue")

OpenURL strURL1 , objMobiWebEdit , 5 


' Step 17:  Execute Swipe eDOWN 
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Swipe eDOWN  on MobiWebView."
Environment("ExpectedResult") = "Simulates a gesture on a MobiWebView"
Set ObjAfterSwipe = MobiDevice("Web Browser").MobiWebLink("CodingGround")
blnFlag = VerifySwipe(objMobiWebView , eDOWN , ,30,,ObjAfterSwipe)

' Step 18:  Execute Swipe eUP 
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Swipe eUP  on MobiWebView."
Environment("ExpectedResult") = "Simulates a gesture on a MobiWebView"
Set ObjAfterSwipe = MobiDevice("Web Browser").MobiWebLink("CodingGround")
blnFlag = VerifySwipe(objMobiWebView , eUP,,20,, ObjAfterSwipe)

' Step 19:  Execute Swipe eDOWN  and velocity eFAST
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = " Execute Swipe eDOWN  and velocity eFAST  on MobiWebView."
Environment("ExpectedResult") = "Simulates a gesture on a MobiWebView"
Set ObjAfterSwipe = MobiDevice("Web Browser").MobiWebLink("CodingGround")
blnFlag = VerifySwipe(objMobiWebView ,eDOWN,eFAST,30,, ObjAfterSwipe)


' Step 20:  Execute Swipe eUP and velocity eFAST
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Swipe eUP and velocity eFAST on MobiWebView."
Environment("ExpectedResult") = "Simulates a gesture on a MobiWebView"
Set ObjAfterSwipe = MobiDevice("Web Browser").MobiWebLink("CodingGround")
blnFlag = VerifySwipe(objMobiWebView ,eUP ,eFAST,20,, ObjAfterSwipe)


' Step 21:  Execute Swipe eDOWN  and velocity eMEDIUM
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = " Execute Swipe eDOWN  and velocity eMEDIUM  on MobiWebView."
Environment("ExpectedResult") = "Simulates a gesture on a MobiWebView"
Set ObjAfterSwipe = MobiDevice("Web Browser").MobiWebLink("CodingGround")
blnFlag = VerifySwipe(objMobiWebView ,eDOWN,eMEDIUM,40,, ObjAfterSwipe)


' Step 22:  Execute Swipe eUP and velocity eMEDIUM
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Swipe eUP and velocity eMEDIUM on MobiWebView."
Environment("ExpectedResult") = "Simulates a gesture on a MobiWebView"
Set ObjAfterSwipe = MobiDevice("Web Browser").MobiWebLink("CodingGround")
blnFlag = VerifySwipe(objMobiWebView ,eUP ,eMEDIUM,20,, ObjAfterSwipe)


' Step 23:  Execute Swipe eDOWN  and velocity eSLOW
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = " Execute Swipe eDOWN  and velocity eSLOW  on MobiWebView."
Environment("ExpectedResult") = "Simulates a gesture on a MobiWebView"
Set ObjAfterSwipe = MobiDevice("Web Browser").MobiWebLink("CodingGround")
blnFlag = VerifySwipe(objMobiWebView ,eDOWN,eSLOW,30,, ObjAfterSwipe)


' Step 24:  Execute Swipe eUP and velocity eSLOW
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Swipe eUP and velocity eSLOW on MobiWebView."
Environment("ExpectedResult") = "Simulates a gesture on a MobiWebView"
Set ObjAfterSwipe = MobiDevice("Web Browser").MobiWebLink("CodingGround")
blnFlag = VerifySwipe(objMobiWebView ,eUP ,eSLOW,20,, ObjAfterSwipe)


' Step 25:  Execute Swipe eDOWN  and velocity eSLOW and valid starting percentage
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = " Execute Swipe eDOWN  and velocity eSLOW and valid starting percentage on MobiWebView."
Environment("ExpectedResult") = "Simulates a gesture on a MobiWebView"
Set ObjAfterSwipe = MobiDevice("Web Browser").MobiWebLink("CodingGround")
blnFlag = VerifySwipe(objMobiWebView ,eDOWN,eSLOW, 35, , ObjAfterSwipe)


' Step 26:  Execute Swipe eUP and velocity eSLOW and valid starting percentage
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Swipe eUP and velocity eSLOW and valid starting percentage on MobiWebView."
Environment("ExpectedResult") = "Simulates a gesture on a MobiWebView"
Set ObjAfterSwipe = MobiDevice("Web Browser").MobiWebLink("CodingGround")
blnFlag = VerifySwipe(objMobiWebView ,eUP ,eSLOW, 20, , ObjAfterSwipe)


' Step 27:  Execute Swipe eDOWN  and velocity eMEDIUM and valid starting percentage
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = " Execute Swipe eDOWN  and velocity eMEDIUM and valid starting percentage on MobiWebView."
Environment("ExpectedResult") = "Simulates a gesture on a MobiWebView"
Set ObjAfterSwipe = MobiDevice("Web Browser").MobiWebLink("CodingGround")
blnFlag = VerifySwipe(objMobiWebView ,eDOWN,eMEDIUM, 30, , ObjAfterSwipe)


' Step 28:  Execute Swipe eUP and velocity eMEDIUM and valid starting percentage
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Swipe eUP and velocity eMEDIUM and valid starting percentage on MobiWebView."
Environment("ExpectedResult") = "Simulates a gesture on a MobiWebView"
Set ObjAfterSwipe = MobiDevice("Web Browser").MobiWebLink("CodingGround")
blnFlag = VerifySwipe(objMobiWebView ,eUP ,eMEDIUM, 20, , ObjAfterSwipe)


' Step 29:  Execute Swipe eDOWN  and velocity eFAST and valid starting percentage
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = " Execute Swipe eDOWN  and velocity eFAST and valid starting percentage on MobiWebView."
Environment("ExpectedResult") = "Simulates a gesture on a MobiWebView"
Set ObjAfterSwipe = MobiDevice("Web Browser").MobiWebLink("CodingGround")
blnFlag = VerifySwipe(objMobiWebView ,eDOWN,eFAST, 30, , ObjAfterSwipe)


' Step 30:  Execute Swipe eUP and velocity eFAST and valid starting percentage
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Swipe eUP and velocity eFAST and valid starting percentage on MobiWebView."
Environment("ExpectedResult") = "Simulates a gesture on a MobiWebView"
Set ObjAfterSwipe = MobiDevice("Web Browser").MobiWebLink("CodingGround")
blnFlag = VerifySwipe(objMobiWebView ,eUP ,eFAST, 20, , ObjAfterSwipe)

' Step 30:  Execute Scroll eBottom
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Scroll eBottom on MobiWebView."
Environment("ExpectedResult") = "Simulates the gesture of moving to the edge of a scrollable area on MobiWebView"
Set ObjAfterScroll = MobiDevice("Web Browser").MobiWebLink("Contact")
blnFlag = VerifyScroll(objMobiWebView ,"bottom",ObjAfterScroll)

' Step 30:  Execute Scroll eTop
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Scroll eTop on MobiWebView."
Environment("ExpectedResult") = "Simulates the gesture of moving to the edge of a scrollable area on MobiWebView"
Set ObjAfterScroll = MobiDevice("Web Browser").MobiWebEdit("edTP")
blnFlag = VerifyScroll(objMobiWebView ,"top",ObjAfterScroll)

' Step 30:  Execute Scroll without parameter
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Execute Scroll without parameter on MobiWebView."
Environment("ExpectedResult") = "Proper error message should be thrown"
Set ObjAfterScroll = MobiDevice("Web Browser").MobiWebLink("Contact")
blnFlag = VerifyScroll(objMobiWebView ,"withoutparameter",ObjAfterScroll)

' Step :  Execute CheckProperty when object is visible
'#######################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Check property when object is visible"
Environment("ExpectedResult") = "CheckProperty should wait for the property to attain a and return True"
blnResult = VerifyCheckProperty(objMobiWebView, "visible", "True", 5000 , True)

'Step 7 : Execute ChildObjects with  non recursive 
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") =   " Verify child object count"
Environment("ExpectedResult") = "ChildObjects should return the count of children (if any)with recursive value False"
blnResult = VerifyChildObjects(objMobiWebView, "nonrecursive" , 1 )

'Step 8 : Execute ChildObjects with recursive 
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") =   " Verify child object count"
Environment("ExpectedResult") = "ChildObjects should return the count of children (if any) with recursive value True"
blnResult = VerifyChildObjects(objMobiWebView, "recursive" ,4000)

'Step : Execute Exist  when object is visible
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = " Verify existence when object is visible"
Environment("ExpectedResult")  ="Exist should return True"
blnResult = VerifyExist(objMobiWebView, True , 5)

arrTOProps = Array("visible","enabled")
arrTOPropValues =Array(True, True)
arrROProps = Array("nativeclass","loading")
If MobiDevice("Web Browser").GetROProperty("platform")="AndroidOS" Then
	arrROPropValues = array("android.webkit.WebView","False" )
Else
	arrROPropValues = array("WKWebView","False" )
End If

'Step : Execute GetROProperty
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Verify run time values of Input properties"
Environment("ExpectedResult")= "Correct run time property should be returned"
blnResult = VerifyGetROProperty(objMobiWebView , arrROProps , arrROPropValues)

'Step : Execute GetTOProperties
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") =  " Verify returned test object property collection"
Environment("ExpectedResult") = "An collection of properties used for object identification should be returned" 
blnResult = VerifyGetTOProperties(objMobiWebView, arrTOProps)

'Step 14 : Execute GetTOProperty
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = " Verify values used for object identification"
Environment("ExpectedResult") = "Returned  values should be mapped with Input values"
blnResult =  VerifyGetTOProperty(objMobiWebView, arrTOProps,arrTOPropValues)

'Step  : Execute RefreshObject
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") =  " Verify object refresh"
Environment("ExpectedResult") = "Object should get refreshed"
blnResult = VerifyRefreshObject(objMobiWebView)

'Step : Execute SetTOProperty
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") =  "Verify value set for the specified identification property"
Environment("ExpectedResult") = "Property value should get updated"
blnResult = VerifySetTOProperty(objMobiWebView, arrTOProps)

'Step  : Execute 'ToString
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") ="Verify name of the object"
Environment("ExpectedResult") = "String value cointaining the object description should be returned"
blnResult = VerifyTOString(objMobiWebView)

'Step : Execute 'WaitProperty when object is visible
'##########################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = " Verify Wait for the property  till timeout to attain value"
Environment("ExpectedResult") ="WaitProperty should return true when object is visible"
blnResult = VerifyWaitProperty(objMobiWebView, "loading", "False", 5000,True)

'Step 29:  EvaluateScript  (For Getting whole page text on  MobiWebView)
'###############################################################
intStep = intStep+1
Environment("StepName") = "Step" & intStep
Environment("Description") = "Verify EvaluateScript" 
Environment("ExpectedResult") = "EvaluateScript should get the page text."
blnResult =  VerifyEvaluateScript(objMobiWebView , "document.body.innerText" , False , "")
'#############################################################

'End test iteration
EndTestIteration()
