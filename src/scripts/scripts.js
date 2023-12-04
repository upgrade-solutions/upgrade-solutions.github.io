$(function() {
  $('.tabular.menu .item').tab();

  // Scroll Transitions
  ['contact', 'services', 'products', 'why', 'how', 'what'].forEach(function (element) {
    $(`#${element}-link`).on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $(`#${element}`).offset().top
      }, 1000); // Adjust the duration as needed
    });
  });
  // End Scroll Transitions
  
  // Attach scroll event handler
  $(window).on('scroll', function() {
    if (isShowcaseInView()) {
      triggerObjectAnimation();
      
      // Remove the scroll event listener to avoid unnecessary checks
      $(window).off('scroll');
    }
  });

  // Add a transition when the Objects tab is clicked
  $('#objects-tab').on('click', function () {
    triggerObjectAnimation();
  });

  // Add a transition when the Schemas tab is clicked
  $('#schemas-tab').on('click', function () {
    triggerSchemaAnimation();
  });

  // Add a transition when the Schemas tab is clicked
  $('#logic-tab').on('click', function () {
    triggerLogicAnimation();
  });
});

// Function to check if #showcase is in view
function isShowcaseInView() {
  const showcaseElement = $('#showcase');
  const windowHeight = $(window).height();
  const scrollPosition = $(window).scrollTop();
  const elementOffset = showcaseElement.offset().top;

  return scrollPosition > elementOffset - windowHeight / 2;
}

function triggerObjectAnimation() {
  hideAllElements();
  fadeElement('#create')
    .then(waitFor(6000))
    .then(() => fadeElement('#create'))
    .then(() => fadeElement('#use'))
    .then(waitFor(4500))
    .then(() => showStatic('#use'))
    .catch((error) => {
      console.error('Error:', error);
    });
};

function triggerSchemaAnimation() {
  hideAllElements();
  fadeElement('#publish')
    .then(waitFor(13000))
    .then(() => fadeElement('#publish'))
    .then(() => fadeElement('#sync'))
    .then(waitFor(4000))
    .then(() => showStatic('#sync'))
    .catch((error) => {
      console.error('Error:', error);
    });
};

function triggerLogicAnimation() {
  hideAllElements();
  fadeElement('#define')
    .then(waitFor(5000))
    .then(() => fadeElement('#define'))
    .then(() => fadeElement('#produce'))
    .then(waitFor(7000))
    .then(() => showStatic('#produce'))
    .catch((error) => {
      console.error('Error:', error);
    });
};

function fadeElement(selector) {
  return new Promise(function (resolve) {
    $(`${selector}-image`).show();
    $(selector).transition({
      animation: 'fade',
      duration: '1s',
      onComplete: resolve
    });
  });
}

function waitFor(ms) {
  return function () {
    return new Promise(function (resolve) {
      setTimeout(resolve, ms);
    });
  };
}

function showStatic(selector) {
  return new Promise(function (resolve) {
    $(`${selector}-image`).hide();
    $(`${selector}-static`).show();
    resolve();
  });
}

function hideAllElements() {
  const elementsToHide = ['#create', '#use', '#publish', '#sync', '#define', '#produce'];
  
  elementsToHide.forEach(selector => {
    $(`${selector}-image`).hide();
    $(`${selector}-static`).hide();
  });
}