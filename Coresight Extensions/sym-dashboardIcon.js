(function(CS) {
    function symbolVis() {}
    var tabledata = [];
    CS.deriveVisualizationFromBase(symbolVis);

    symbolVis.prototype.init = function(scope) {
        this.onDataUpdate = dataUpdate;

        var randomint = Math.round(Math.random()*1000);
        $('#newDiv').append('<div class="panel panel-primary"><div class="panel-heading"><div class="row"><div class="col-xs-3"><i class="fa fa-comments fa-5x"></i></div><div class="col-xs-9 text-right"><div class="huge" id ="value'+randomint+'">26</div><div id="Details'+randomint+'">New Comments!</div></div></div></div></div>');
        $('#newDiv').attr('id', 'div'+randomint);

        function dataUpdate(data, randomint) {
            if (data) {
                console.log(data);
                console.log(scope);
                console.log(randomint);

                // console.log(($.this)




                $('#value').text(data.Value);
                $('#Details').text(data.Label);

            }
        }



    };

    var definition = {
        typeName: 'dashboardIcon',
        datasourceBehavior: CS.Extensibility.Enums.DatasourceBehaviors.Single,
        // iconUrl: 'Images/ServelecControlsSmall.png',
        visObjectType: symbolVis,
        getDefaultConfig: function() {
            return {
                DataShape: 'Value',
                Height: 150,
                Width: 1500,
                BackgroundColor: 'rgb(255,0,0)',
                TextColor: 'rgb(0,255,0)'
            };
        },
        configTitle: 'Format Symbol',
        StateVariables: ['MultistateColor']
    };

    CS.symbolCatalog.register(definition);
})(window.PIVisualization);
