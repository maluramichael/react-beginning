var Timer = require('./components/timer.js'),
    UserInfo = require('./components/userinfo.js'),
    Box = require('./components/box.js');

ReactDOM.render( < Box / > , window.document.getElementById('box'));
ReactDOM.render( < Timer / > , window.document.getElementById('timer'));
ReactDOM.render( < UserInfo / > , window.document.getElementById('userinfo'));
