/*------------------------------------------------------------------------
# Copyright (C) 2005-2014 WebxSolution Ltd. All Rights Reserved.
# @license - GPLv2.0
# Author: WebxSolution Ltd
# Websites:  http://arkextensions.com
# Terms of Use: http://arkextensions.com/products/ark-editor#terms-of-use
# ------------------------------------------------------------------------*/
CKEDITOR.dialog.add("arkabout",function(n){var t=n.lang.arkabout;return{title:CKEDITOR.env.ie?t.dlgTitle:t.title,minWidth:390,minHeight:315,contents:[{id:"tab1",label:"",title:"",expand:!0,padding:0,elements:[{type:"html",html:'<style type="text/css">.cke_about_container{color:#000 !important;padding:10px 10px 0;margin-top:5px}.cke_about_container p{margin: 0 0 10px;}.cke_about_container .cke_about_logo{height:140px;background-image:url('+CKEDITOR.plugins.get("arkabout").path+'dialogs/logo.png);background-position:center; background-repeat:no-repeat;margin-bottom:10px;background-color:#F2F2F2;border-bottom:1px solid #E3E4E3;border-top:1px solid #E3E4E3;padding:5px 6px;}.cke_about_container a{cursor:pointer !important;color:blue !important;text-decoration:underline !important;}<\/style><div class="cke_about_container"><div class="cke_about_logo"><\/div><p>For licensing information please visit the following web sites:<br><a href="http://arkextensions.com/products/ark-editor#terms-of-use" target="_blank">http://arkextensions.com/products/ark-editor#terms-of-use<\/a><br><a href="http://ckeditor.com/license" target="_blank">http://ckeditor.com/license<\/a><\/p><p>Joomla!&trade; Integration of the CKEDITOR.<br>Copyright © <a href="http://www.webxsolution.com/"title="Specialists in Joomla!&trade; related matters" target="_blank">WebxSolution Ltd<\/a>, All rights reserved.<br>License: GPLv2.0.<br>Author: <a href="http://www.webxsolution.com "title="Specialists in Joomla!&trade; related matters" target="_blank">WebxSolution Ltd<\/a>.<br>Website: <a href="http://www.arkextensions.com/" target="_blank">http://www.arkextensions.com<\/a> <br><\/p><p>CKEDITOR API Engine '+CKEDITOR.version+" (revision "+CKEDITOR.revision+")<br>"+t.copy.replace("$1",'<a href="http://cksource.com/" target="_blank">CKSource<\/a> - Frederico Knabben')+"<\/p><p><\/div>"}]}],buttons:[CKEDITOR.dialog.cancelButton]}})