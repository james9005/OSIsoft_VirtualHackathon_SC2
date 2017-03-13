(function(CS) {
    function symbolVis() {}
    var tabledata = [];
    CS.deriveVisualizationFromBase(symbolVis);

    symbolVis.prototype.init = function(scope) {
        this.onDataUpdate = dataUpdate;

        function dataUpdate(data) {
            if (data) {
                // console.log(data);
                if(data.Data.length != undefined){
                    // this loads the required fields for the informationPanel & checks that the data is not undefined.


                    //write the datafields to the table
                    $('#callsLogged').text(data.Data[0].Value);
                    $('#slaMet').text(data.Data[1].Value);
                    $('#incidents').text(data.Data[2].Value);
                    $('#requests').text(data.Data[3].Value);
                    $('#callsResolved').text(data.Data[4].Value);
                    $('#failedSLA').text(data.Data[5].Value);
                    $('#bestPerformer').text(data.Data[6].Value);
                    $('#worstPerformer').text(data.Data[7].Value);


                }



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
