(function(CS) {
    function symbolVis() {}
    var tabledata = [];
    CS.deriveVisualizationFromBase(symbolVis);

    symbolVis.prototype.init = function(scope) {
        this.onDataUpdate = dataUpdate;

        function dataUpdate(data) {
            if (data) {
                console.log(data);




            }
        }
//


    };

    var definition = {
        typeName: 'informationPanel',
        datasourceBehavior: CS.Extensibility.Enums.DatasourceBehaviors.Multiple,
        // iconUrl: 'Images/ServelecControlsSmall.png',
        visObjectType: symbolVis,
        getDefaultConfig: function() {
            return {
                DataShape: 'TimeSeries',
                Height: 150,
                Width: 150,
                BackgroundColor: 'rgb(255,0,0)',
                TextColor: 'rgb(0,255,0)'
            };
        },
        configTitle: 'Format Symbol',
        StateVariables: ['MultistateColor']
    };

    CS.symbolCatalog.register(definition);
})(window.PIVisualization);





// Object
// Data
// :
// Array[31]
// 0
// :
// Object
// EndTime
// :
// "3/11/2017 2:01:09 PM"
// ErrorCode
// :
// 3503
// ErrorDescription
// :
// "PI Point Not Found \\PISRV01\Daily Rollup1.Actual EOD"
// StartTime
// :
// "3/11/2017 6:01:09 AM"
// Values
// :
// Array[0]
// __proto__
// :
// Object
