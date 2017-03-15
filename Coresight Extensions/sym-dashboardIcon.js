(function(CS) {
    function symbolVis() {}
    var tabledata = [];
    CS.deriveVisualizationFromBase(symbolVis);

    symbolVis.prototype.init = function(scope) {

        var randomint = Math.round(Math.random()*1000);
        $('#newDiv').append('<div id="panel' +randomint+'" class="panel panel-primary" ><div class="panel-heading"><div class="row"><div class="col-xs-3" style="Height:100%;float:left;width:30%"><i id="image'+randomint+'"class="fa fa-comments fa-5x"></i></div><div class="col-xs-9 text-right" Style="Height:100%;width:45%;float:right"><div class="huge" id ="value'+randomint+'">26</div><div id="Details'+randomint+'">New Comments!</div></div></div></div></div>');
        $('#newDiv').attr('id', 'div'+randomint);

        this.onDataUpdate = dataUpdate;
        function dataUpdate(data) {
            if (data) {

                console.log(data);
                console.log(scope);

                console.log(randomint);

                // console.log(data);
                // console.log(scope);
                // console.log(randomint);


                // console.log(($.this)

                // console.log(scope.config.Label);

                if(scope.config.Label != ''){
                    $('#Details' + randomint).text(scope.config.Label);
                }else {
                    $('#Details' + randomint).text(data.Label);

                }
                 if(scope.config.icon != ''){
                $('#image' + randomint).removeClass($('#image' + randomint).attr('class'))
                $('#image' + randomint).addClass(scope.config.icon)}
                else
                {

                }

                
                $('#value' + randomint).text(data.Value);
                // console.log(scope.config);

                scope.symbol._h = scope.config.Height
            }
        }

            this.onConfigChange = function() {
                scope.symbol._h = scope.config.Height;

                if(scope.config.colour != '' ){
                    $('#panel' + randomint).removeClass($('#panel'+randomint).attr('class'))
                    $('#panel' + randomint).addClass('panel panel-' + (scope.config.colour))

                }else{
                    $('#panel' + randomint).removeClass($('#panel'+randomint).attr('class'))
                    $('#panel' + randomint).addClass('panel panel-primary')
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
                Width: 150,
                BackgroundColor: 'rgb(255,0,0)',
                TextColor: 'rgb(0,255,0)',
                colour: 'primary',
                Label:'',
                icon:''
            };
        },
        configTitle: 'Format Symbol',
        StateVariables: ['MultistateColor']
    };

    CS.symbolCatalog.register(definition);
})(window.PIVisualization);
