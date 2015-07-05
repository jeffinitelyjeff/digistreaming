$(document).ready(function() {
  var db;

  function seasons_for_dubbing_names(dubbing_names) {
    return _.chain(dubbing_names).map(function (dubbing_name) {
      return db['dubbing_info'][dubbing_name]['season'];
    }).uniq().value();
  }

  // function dubbing_names(country_code) {
  //   var services = db['availability'][country_code];
  //   return _.chain(services).map(function (offerings) {
  //     if ($.isArray(offerings)) {
  //       return offerings;
  //     } else {
  //       return Object.keys(offerings);
  //     }
  //   }).flatten().uniq().value();
  // }

  // function get_seasons(country_code) {
  //   dubbing_names = dubbing_names(country_code);
  //   console.log(dubbing_names);
  //   return seasons_for_dubbing_names(dubbing_names);
  // };

  function fill_data() {
    var country_code = 'US'; // FIXME
    seasons = db['seasons'];
    // console.log(get_seasons(country_code));
  };

  var load_yaml = function(data) {
    db = jsyaml.load(data);
    fill_data();
  };

  $.get('js/info.yaml').done(load_yaml);
});