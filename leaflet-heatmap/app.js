
$(function() {
  // Options
  optionActions = {
    'all': function(features) {
      return _.map(features, function(f) {
        return { lat: f.geometry.coordinates[1], lon: f.geometry.coordinates[0], value: 1};
      });
    },
    'october': function(features) {
      features = _.filter(features, function(f) {
        return (f.properties.Month == 'Oct');
      });
      return _.map(features, function(f) {
        return { lat: f.geometry.coordinates[1], lon: f.geometry.coordinates[0], value: 1};
      });
    },
    'september': function(features) {
      features = _.filter(features, function(f) {
        return (f.properties.Month == 'Sep');
      });
      return _.map(features, function(f) {
        return { lat: f.geometry.coordinates[1], lon: f.geometry.coordinates[0], value: 1};
      });
    },
    'august': function(features) {
      features = _.filter(features, function(f) {
        return (f.properties.Month == 'Aug');
      });
      return _.map(features, function(f) {
        return { lat: f.geometry.coordinates[1], lon: f.geometry.coordinates[0], value: 1};
      });
    },
    'july': function(features) {
      features = _.filter(features, function(f) {
        return (f.properties.Month == 'Jul');
      });
      return _.map(features, function(f) {
        return { lat: f.geometry.coordinates[1], lon: f.geometry.coordinates[0], value: 1};
      });
    },
    'june': function(features) {
      features = _.filter(features, function(f) {
        return (f.properties.Month == 'Jun');
      });
      return _.map(features, function(f) {
        return { lat: f.geometry.coordinates[1], lon: f.geometry.coordinates[0], value: 1};
      });
    },
    'may': function(features) {
      features = _.filter(features, function(f) {
        return (f.properties.Month == 'May');
      });
      return _.map(features, function(f) {
        return { lat: f.geometry.coordinates[1], lon: f.geometry.coordinates[0], value: 1};
      });
    },
    'mondays': function(features) {
      features = _.filter(features, function(f) {
        return (f.properties.Day == 'Mon');
      });
      return _.map(features, function(f) {
        return { lat: f.geometry.coordinates[1], lon: f.geometry.coordinates[0], value: 1};
      });
    },
    'tuesdays': function(features) {
      features = _.filter(features, function(f) {
        return (f.properties.Day == 'Tue');
      });
      return _.map(features, function(f) {
        return { lat: f.geometry.coordinates[1], lon: f.geometry.coordinates[0], value: 1};
      });
    },
    'wednesdays': function(features) {
      features = _.filter(features, function(f) {
        return (f.properties.Day == 'Wed');
      });
      return _.map(features, function(f) {
        return { lat: f.geometry.coordinates[1], lon: f.geometry.coordinates[0], value: 1};
      });
    },
    'thursdays': function(features) {
      features = _.filter(features, function(f) {
        return (f.properties.Day == 'Thu');
      });
      return _.map(features, function(f) {
        return { lat: f.geometry.coordinates[1], lon: f.geometry.coordinates[0], value: 1};
      });
    },
    'fridays': function(features) {
      features = _.filter(features, function(f) {
        return (f.properties.Day == 'Fri');
      });
      return _.map(features, function(f) {
        return { lat: f.geometry.coordinates[1], lon: f.geometry.coordinates[0], value: 1};
      });
    },
    'saturdays': function(features) {
      features = _.filter(features, function(f) {
        return (f.properties.Day == 'Sat');
      });
      return _.map(features, function(f) {
        return { lat: f.geometry.coordinates[1], lon: f.geometry.coordinates[0], value: 1};
      });
    },
    'sundays': function(features) {
      features = _.filter(features, function(f) {
        return (f.properties.Day == 'Sun');
      });
      return _.map(features, function(f) {
        return { lat: f.geometry.coordinates[1], lon: f.geometry.coordinates[0], value: 1};
      });
    },
    'hour-1': function(features) {
      features = _.filter(features, function(f) {
        return (parseInt(f.properties.Hour) >= 5 && parseInt(f.properties.Hour) < 10);
      });
      return _.map(features, function(f) {
        return { lat: f.geometry.coordinates[1], lon: f.geometry.coordinates[0], value: 1};
      });
    },
    'hour-2': function(features) {
      features = _.filter(features, function(f) {
        return (parseInt(f.properties.Hour) >= 10 && parseInt(f.properties.Hour) < 17);
      });
      return _.map(features, function(f) {
        return { lat: f.geometry.coordinates[1], lon: f.geometry.coordinates[0], value: 1};
      });
    },
    'hour-3': function(features) {
      features = _.filter(features, function(f) {
        return (parseInt(f.properties.Hour) >= 17 && parseInt(f.properties.Hour) < 22);
      });
      return _.map(features, function(f) {
        return { lat: f.geometry.coordinates[1], lon: f.geometry.coordinates[0], value: 1};
      });
    },
    'hour-4': function(features) {
      features = _.filter(features, function(f) {
        return (parseInt(f.properties.Hour) >= 22 && parseInt(f.properties.Hour) <= 24) || (parseInt(f.properties.Hour) >= 0 && parseInt(f.properties.Hour) < 5);
      });
      return _.map(features, function(f) {
        return { lat: f.geometry.coordinates[1], lon: f.geometry.coordinates[0], value: 1};
      });
    },
    'cat-biz': function(features) {
      features = _.filter(features, function(f) {
        return (f.properties.Offense == 'ROBBIZ');
      });
      return _.map(features, function(f) {
        return { lat: f.geometry.coordinates[1], lon: f.geometry.coordinates[0], value: 1};
      });
    },
    'cat-per': function(features) {
      features = _.filter(features, function(f) {
        return (f.properties.Offense == 'ROBPER');
      });
      return _.map(features, function(f) {
        return { lat: f.geometry.coordinates[1], lon: f.geometry.coordinates[0], value: 1};
      });
    },
    'cat-pag': function(features) {
      features = _.filter(features, function(f) {
        return (f.properties.Offense == 'ROBPAG');
      });
      return _.map(features, function(f) {
        return { lat: f.geometry.coordinates[1], lon: f.geometry.coordinates[0], value: 1};
      });
    }
  };

  // Make map
  function makeMap(data, features) {
    var heatmapLayer;
    var map;
    var heatOptions = {
      radius: 10,
      opacity: 0.8,
      gradient: {
        0.2: "rgb(0,0,255)",
        0.4: "rgb(0,255,255)",
        0.6: "rgb(0,255,0)",
        0.8: "rgb(255,255,0)",
        1.0: "rgb(255,0,0)"
      }
    };

    // Add inital layer
    heatmapLayer = new L.TileLayer.heatMap(heatOptions);
    heatmapLayer.addData(data);

    map = new L.Map('heatmap-map', {
      scrollWheelZoom: false
    });
    map.addLayer(new L.tileLayer('//{s}.tiles.mapbox.com/v3/minnpost.map-wi88b700/{z}/{x}/{y}.png'));
    map.addLayer(heatmapLayer);
    map.setView([44.9800, -93.2636], 12);

    // Handle clicks
    $('.options a').click(function(e) {
      e.preventDefault();
      var $this = $(this);
      _.each(optionActions, function(action, o) {
        if ($this.hasClass('option-' + o)) {
          $('.options a').addClass('pure-button-secondary');
          $('.options a').removeClass('pure-button-primary');
          $this.addClass('pure-button-primary');
          $this.removeClass('pure-button-secondary');

          map.removeLayer(heatmapLayer);
          heatmapLayer = new L.TileLayer.heatMap(heatOptions);
          heatmapLayer.addData(action(features));
          map.addLayer(heatmapLayer);
        };
      });
    });
  }

  // Get data
  $.getJSON('robberies-2013-ytd.geojson', function(data) {
    var parsed = [];
    var i;
    console.log(data);
    data.features.forEach(function(f) {
      parsed.push({ lat: f.geometry.coordinates[1], lon: f.geometry.coordinates[0], value: 1});
    });
    makeMap(parsed, data.features);
  });
});