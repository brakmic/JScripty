var jsDOM = require('jsdom');

var _html = '<!DOCTYPE html>' + '\r\n' +
                    '<html>' + '\r\n' +
                        '<head>' + '\r\n' +
                        '<meta charset="utf-8">' + '\r\n' +
                        '<meta http-equiv="X-UA-Compatible" content="IE=edge">' + '\r\n' +
                        '<title>JScripty React</title>' + '\r\n' +
                        '</head>' + '\r\n' +
                        '<body>' + '\r\n' +
                            '<div id="app"></div>' + '\r\n' +
                        '</body>' + '\r\n' +
                    '</html>' + '\r\n';


//based on ideas from @fraser-xu
//original article: http://webuild.envato.com/blog/running-headless-javascript-testing-with-electron-on-any-ci-server/
var setupDOM = function (html) {
    if (typeof document !== 'undefined') {
        return {};
    }

    if (html) {
        docHTML = html;
    } else {
        docHTML = _html;
    }
    global.document = jsDOM.jsdom(docHTML);
    global.window = global.document.defaultView;
    global.navigator = {
        userAgent: 'JScripty.DOM'
    };
};

var getElement = function(elementId){
    if(document){
        return document.getElementById(elementId);
    }
    throw new Error('DOCUMENT object not available!');
};

var getHTML = function(){
    return document.documentElement.innerHTML;
};

module.exports = {
    setupDOM: setupDOM,
    getElement: getElement,
    defaultHtml: _html,
    getHTML: getHTML,
}
