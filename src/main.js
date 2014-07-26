define(function(require, exports, module) {
  // Requires
  var Engine = require('famous/core/Engine');
  var Surface = require('famous/core/Surface');
  var Modifier = require('famous/core/Modifier');
  var Transform = require('famous/core/Transform');
  var HeaderFooterLayout = require('famous/views/HeaderFooterLayout');
  var Scrollview = require('famous/views/Scrollview');

  // create mainContext to add 
  // renderables/modifiers to
  var mainContext = Engine.createContext();

  // website layout options
  var layoutOptions = {
    header: 100,
    footer: 50
  }
  
  // page content option
  var contentOptions = {
    height: window.innerHeight,
    backgroundColor: [
      'grey',
      'white',
      'grey',
      'white',
    ],
    textColor: [
      'white',
      '#00BFFF',
      'white',
      '#00BFFF',
    ],
    html: [
      '<div class="intro-slide"><h1>QuickCall</h1> \
      <p>The first mobile app that allows internet based <br> voice-calling on the FireFox Marketplace.<br><br>Available on FireFox OS</p> \
      <a href="#about" class="btn btn-circle page-scroll"></div>',

      '<div class="about"> \
      <h2>About QuickCall</h2> \
      <p>Making international calls is expensive and not covered in most phone plans.</p> \
      <p>QuickCall allows you to make international calls at local rates.</p> \
      <p>Simply enter a phone number and QuickCall will connect you. </p> \
      <br><br> \
      </div>'
    ],
    fontSize: '40px'
  }

  // init the layout 
  init(layoutOptions);

  // main functions
  function init(layoutOptions) {
    createLayout(layoutOptions.header, layoutOptions.footer);
    addFooter(layoutOptions.footer);
    addContent(contentOptions.height, contentOptions.backgroundColor, contentOptions.fontSize, contentOptions.html, contentOptions.textColor);
    addHeader(layoutOptions.header);
  }

  function createLayout(header, footer) {
    layout = new HeaderFooterLayout({
      headerSize: header,
      footerSize: footer
    });
    mainContext.add(layout);
  }

  function addHeader(height) {
    var header = new Surface({
      content: '<div class="nav-bar"><span class="logo">Q.C</span> \
                  <div class="tabs"> \
                    <span>ABOUT<span> <span>SIGNUP<span> <span>TEAM<span> \
                  <div> \
                </div>',
      properties: {
        lineHeight: height/4 + 'px',
        fontSize: height/2 + 'px',

        color: '#fff',
        backgroundColor: 'grey'
      }
    });
    layout.header.add(header);
  }

  function addContent(height, backgroundColor, fontSize, html, textColor) {
    var scrollview = new Scrollview();
    var content = [];
    scrollview.sequenceFrom(content);
    for(var i = 0; i < 4; i++) {
      temp = new Surface({
        content: html[i],
        size: [undefined, height],
        properties: {
          textAlign: 'center',

          fontSize: fontSize,

          color: textColor[i],
          backgroundColor: backgroundColor[i],
        }
      });
      temp.pipe(scrollview);
      content.push(temp);
    }
    layout.content.add(scrollview);
  }

  function addFooter(height) {
    var footer = new Surface({
      content: 'Footer',
      properties: {
        lineHeight: height + 'px',
        fontSize: height/2 + 'px',
        textAlign: 'center',
        backgroundColor: 'grey'
      }
    });
    layout.footer.add(footer);
  }


});
