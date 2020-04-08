// sourced from https://gist.github.com/Squeegy/1431195
const accurateInterval = (time, fn) => {
  var cancel, nextAt, timeout, wrapper, _ref;
  nextAt = new Date().getTime() + time;
  timeout = null;
  // if (typeof time === 'function') {}
  //   (_ref = [time, fn]), (fn = _ref[0]), (time = _ref[1]);
  wrapper = function () {
    nextAt += time;
    timeout = setTimeout(wrapper, nextAt - new Date().getTime());
    return fn();
  };
  cancel = function () {
    return clearTimeout(timeout);
  };
  setTimeout(wrapper, nextAt - new Date().getTime());
  return {
    cancel: cancel,
  };
};

export default accurateInterval;
