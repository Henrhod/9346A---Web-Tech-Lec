<?php
$xmlDoc=new DOMDocument();
$xmlDoc->load("links.xml"); //loads xml file where topics and links are made

$x=$xmlDoc->getElementsByTagName('link'); //gets links in the xml

//get the q parameter from URL 
$q=$_GET["q"];

//lookup links in the xml file of q has any valuw
if (strlen($q)>0) {
  $search=""; //the possible searches
  for($i=0; $i<($x->length); $i++) {
    $y=$x->item($i)->getElementsByTagName('title');
    $z=$x->item($i)->getElementsByTagName('url');
    if ($y->item(0)->nodeType==1) {  //find the link 
      if (stristr($y->item(0)->childNodes->item(0)->nodeValue,$q)) {
        if ($search=="") {
          $search="<a href='" . 
          $z->item(0)->childNodes->item(0)->nodeValue . 
          "' target='_blank'>" . 
          $y->item(0)->childNodes->item(0)->nodeValue . "</a>";
        } else {
          $search=$search . "<a href='" . 
          $z->item(0)->childNodes->item(0)->nodeValue . 
          "' target='_blank'>" . 
          $y->item(0)->childNodes->item(0)->nodeValue . "</a>";
        }
      }
    }
  }
}

// response would be "no related topic" if nothing was found related in the xml
if ($search=="") {
  $response="";
} else {
  $response=$search;
}

//return the response after typing
echo $response;
?>