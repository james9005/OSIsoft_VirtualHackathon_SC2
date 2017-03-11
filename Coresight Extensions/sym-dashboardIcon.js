(function(CS) {
    function symbolVis() {}
    var tabledata = [];
    CS.deriveVisualizationFromBase(symbolVis);

    symbolVis.prototype.init = function(scope) {

        var randomint = Math.round(Math.random()*1000);
        $('#newDiv').append('<div class="panel panel-primary" style="height:100%"><div class="panel-heading"><div class="row"><div class="col-xs-3"><i class="fa fa-comments fa-5x"></i></div><div class="col-xs-9 text-right"><div class="huge" id ="value'+randomint+'">26</div><div id="Details'+randomint+'">New Comments!</div></div></div></div></div>');
        $('#newDiv').attr('id', 'div'+randomint);

        this.onDataUpdate = dataUpdate;
        function dataUpdate(data) {
            if (data) {
                console.log(data);
                console.log(scope);
                console.log(randomint);

                // console.log(($.this)

                // console.log(scope.config.Label);

                if(scope.config.Label != ''){
                    $('#Details' + randomint).text(scope.config.Label);
                }else {
                    $('#Details' + randomint).text(data.Label);

                }


                $('#value' + randomint).text(data.Value);
                // console.log(scope.config);

                scope.symbol._h = scope.config.Height
            }
        }

            this.onConfigChange = function() {
                scope.symbol._h = scope.config.Height;
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
                Width: 150,
                BackgroundColor: 'rgb(255,0,0)',
                TextColor: 'rgb(0,255,0)',
                colour: 'Normal',
                Label:'',
                icon:''
            };
        },
        configTitle: 'Format Symbol',
        StateVariables: ['MultistateColor']
    };

    CS.symbolCatalog.register(definition);
})(window.PIVisualization);
