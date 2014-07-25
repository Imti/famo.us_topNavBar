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
    colors: [
      'grey',
      'white',
      'grey',
      'white',
      'grey',
      'white'
    ],
    fontSize: '40px'
  }

  // init the layout 
  init(layoutOptions);

  // main functions
  function init(layoutOptions) {
    createLayout(layoutOptions.header, layoutOptions.footer);
    addFooter(layoutOptions.footer);
    addContent(contentOptions.height, contentOptions.colors, contentOptions.fontSize);
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
      content: 'Header',
      properties: {
        lineHeight: height + 'px',
        fontSize: height/2 + 'px',
        textAlign: 'center',
        backgroundColor: 'grey'
      }
    });
    layout.header.add(header);
  }

  function addContent(height, colors, fontSize) {
    console.log(colors.length)
    var scrollview = new Scrollview();
    var content = [];
    scrollview.sequenceFrom(content);
    for(var i = 0; i < 10; i++) {
      temp = new Surface({
        content: 'page' + i,
        size: [undefined, height],
        properties: {
          textAlign: 'center',
          backgroundColor: colors[i % colors.length],
          fontSize: fontSize
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
