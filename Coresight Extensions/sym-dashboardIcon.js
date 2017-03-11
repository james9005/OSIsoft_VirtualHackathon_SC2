(function(CS) {
    function symbolVis() {}
    var tabledata = [];
    CS.deriveVisualizationFromBase(symbolVis);

    symbolVis.prototype.init = function(scope) {
        this.onDataUpdate = dataUpdate;

        function dataUpdate(data) {
            if (data) {
                console.log(data);
                console.log(scope);

                $('#value').text(data.Value);
                $('#Details').text(data.Labels);

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
