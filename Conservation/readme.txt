________________________________________


Step 1 - Instructions
________________________________________




Extract the zip file to your web root directory (usually htdocs or wwwroot). If you want to run the template from a sub-directory you will have to update all root-relative references, for example:

<root/css/colorscheme-oceanside.css> to <root/your_sub_directory/css/colorscheme-oceanside.css>

Make sure your web server is configured to process SSI. It might be configured to process only files with certain file extensions such as .stm. In that case, you'll need to either name your pages with a .stm extension or configure your server to process .html as well.




________________________________________


Step 2 - Navigation Type
________________________________________



Select your navigation type:
Megamenu <nav id="navigation" class="main-navigation megadropdown">
Dropdown <nav id="navigation" class="main-navigation dropdown">
Single level <nav id="navigation" class="main-navigation singlelevel">
Open /ssi/navigation.html and update line 8.


________________________________________


Step 3 - Color Scheme

________________________________________



Select a color scheme: 
Oceanside  <link rel="stylesheet" href="/css/colorscheme-oceanside.css">
Orange County <link rel="stylesheet" href="/css/colorscheme-orangecounty.css">
Paso Robles <link rel="stylesheet" href="/css/colorscheme-pasorobles.css">
Santa Barbara <link rel="stylesheet" href="/css/colorscheme-santabarbara.css">
Sierra <link rel="stylesheet" href="/css/colorscheme-sierra.css">
Open head_css_js.html and Update line 25.




________________________________________ 


Step 4 - Google Analytics
________________________________________



Open /ssi/analytics.html and Insert your Google Analytics ID at line 4.
Learn more about Google Analytics by visiting http://webtools.ca.gov/services/analytics/.




________________________________________


Step 5 - Header Images
________________________________________




Replace the sample /images/template2014/header-organization.png with your own logo and organization name. Replace /images/template2014/*(Chosen Color Scheme)/header-background.jpg with your own image.
 If using the optional slideshow banner open /ssi/header-slideshow-banner.html and add your own images and captions. If NOT using the slideshow banner open index.html and delete the include reference on line 55. The reference code will be: <!--#include  virtual="/ssi/header-slideshow-banner.html" -->


________________________________________


Step 6 - Search Format
________________________________________





By default the search field is smaller and located in the upper right corner of the site. The primary page templates (often the homepage) can have a large "Featured Search Box" in the center of the header. To enable this format open any page template and locate the <div id="head-search" class="search-container"> and add the .featured-search class in addition to the existing .search-container class

.

________________________________________


Step 7 - Search Engine
________________________________________




Create a search engine results page (SERP) or customize the sample serp.html found in the root directory. Open /ssi/search.html and enter your search engine ID at line 9 and line 21. Open serp.html and  enter your search engine ID at line 63. If you change the filename or location of your SERP, you'll need to update search.js, line 6, with your new path.




________________________________________


Step 8 - Page Templates
________________________________________

There are four (4) master template page layouts to choose from. A pages layout can be controlled by applying two (2) classes to the <body> element. By default pages will have the smaller banner area and single column. Adding a class of .primary will designate a landing page and use the taller header banner. Adding a class of .two-column will add a sidebar on the right side of the page. You are free to mix and match .primary and .two-column classes to achieve the layout desired. For an inteactive demo please see the following sample page: /sample/page-templates.html




________________________________________


Step 9 - Icons (optional)
________________________________________




Replace the "favorites" icons with your own: /images/template2014/apple-touch-icon-*(Various Sizes).png and /favicon.ico


________________________________________ 


Step 10 - Content
________________________________________




The /sample/index.html file contains links to examples of the new content styles as well as documentation and code that can be copied.

* Menus
* 5 container styles
* 3 list styles
*Heading & parahraph styles
* Tabs
* Accordion Lists
* Carousels & slideshows
* Gallery
* Icon fonts
* Useful content modules

View the Live Demo Site here: http://template.webtools.ca.gov/



________________________________________


Custom CSS (optional)

________________________________________



The State Template Package has been compressed and optimized for better performance. This means that you will not see CSS files that are formatted in a standard and editable way as in the previous versions of the State Template. For custom CSS on your website a custom.css file has been included in the /css/ directory. This file will not edit any original styles in the core template but only load on top of them in addittion to any new styles you may add.

________________________________________ 


Problems?
________________________________________



We welcome your feedback and want to partner with you to continualy improve the State Template to meets your needs. Please report any compatibility issues, bugs, or suggestions to info@eservices.ca.gov.
