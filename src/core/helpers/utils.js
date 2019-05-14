const getLoaderIconElem = forward =>
  forward ? $(".js-form-footer-next") : $(".js-form-footer-back");

export const addSubStepSpinner = forward => {
  const loaderIconElem = getLoaderIconElem(forward);
  const previousBtnContent = loaderIconElem.html();
  loaderIconElem
    .data("btn-content", previousBtnContent)
    .html("<i class='fas btn__icon btn__icon--lg fa-spinner fa-spin'></i>");
  $(".js-loan-application-form").animate({ opacity: 0.5 }, 0);
  $(".js-substep-nav")
    .addClass("disabled")
    .attr("disabled", "disabled");
};

export const removeSubStepSpinner = forward => {
  const loaderIconElem = getLoaderIconElem(forward);
  const previousBtnContent = loaderIconElem.data("btn-content");
  loaderIconElem.html(previousBtnContent);
  $(".js-loan-application-form").css({ opacity: 1 });
  $(".js-substep-nav")
    .removeClass("disabled")
    .removeAttr("disabled");
  $(".js-application__content").scrollTop(0);
  setTimeout(function() {
    $(".js-substep-form-header").focus();
  }, 0);
};

export const getFormQuestionIndex = selector => {
  const elem = $(selector);
  let quesIndex = NaN;
  const index = elem.data() && elem.data().questionIndex;
  if (index || index === 0) {
    quesIndex = index;
  }
  return quesIndex;
};

export const isRedirectedFromRelease = (selector = ".js-heloc-container") => {
  const quesIndex = getFormQuestionIndex(selector);
  return !_.isNaN(quesIndex);
};

export const loadWithQueryStrings = queryStringsObj => {
  const { protocol, host, pathname } = window.location;
  const queryStrings = Object.keys(queryStringsObj)
    .map(key => `${key}=${queryStringsObj[key]}`)
    .reduce((queryString1, queryString2) => `${queryString1}&${queryString2}`);
  window.onbeforeunload = null;
  window.location.href = `${protocol}//${host}${pathname}?${queryStrings}`;
};

export const updateStepCounter = stepProgress => {
  if(stepProgress){
    $('.js--step-progress').html(stepProgress)
  }
};

export default {
  addSubStepSpinner,
  removeSubStepSpinner,
  getFormQuestionIndex,
  isRedirectedFromRelease,
  loadWithQueryStrings,
  updateStepCounter
};
