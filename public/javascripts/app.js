var app = new Vue({
  el: '#app',
  data: {
    tasks: [
      { id:  1,                        content: 'Аттестация Мифтахова',                       start: '2019-01-21', end: '2019-01-31', group: 2, type: 'background', style: "background-color: #40BF6A;" },
      { id:  2,                        content: 'Студенец, АСУ,',                             start: '2019-01-21', end: '2019-01-22', group: 2, type: 'range',      style: "background-color: #ABB83D;" },
      { id:  3,                        content: 'Сюмси, АСУ',                                 start: '2019-01-22', end: '2019-01-30', group: 2, type: 'range',      style: "background-color: #A137A4;" },
      { id:  4,                        content: 'Диагностика Прикамье',                       start: '2019-01-30', end: '2019-01-31', group: 2, type: 'range',      style: "background-color: #CC66AD;" },
      { id:  5,                        content: 'НПС Белая автоматика',                       start: '2019-03-05', end: '2019-09-15', group: 7, type: 'background', style: "background-color: #40BF6A;" },
      { id:  6, subgroup: 'group7_s2', content: 'Договорные сроки проведения работ',          start: '2019-03-05', end: '2019-06-13', group: 7, type: 'range',      style: "background-color: #ABB83D;" },
      { id:  7, subgroup: 'group7_s2', content: 'Договорные сроки сдачи технических отчетов', start: '2019-06-13', end: '2019-09-14', group: 7, type: 'range',      style: "background-color: #CC66AD;" },
      { id:  8, subgroup: 'group7_s1', content: 'Допуск ',                                    start: '2019-03-10', end: '2019-03-14', group: 7, type: 'range',      style: "background-color: blue"     },
      { id:  9, subgroup: 'group7_s1', content: 'Работа',                                     start: '2019-03-15', end: '2019-04-15', group: 7, type: 'range',      style: "background-color: yellow;"  },
      { id: 10, subgroup: 'group7_s2', content: 'Отчет',                                      start: '2019-09-14', end: '2019-09-15', group: 7, type: 'point',      style: "background-color: red;"     },
    ],
    groups: [
      { id: 0, content: '0', users: [ "Аглямов" ] },
      { id: 1, content: '1', users: [ "Аглямов", "Малинкин", "Студент", "Мифтахов", "Эдик" ] },
      { id: 2, content: '2', users: [ "Аглямов", "Булат" ] },
      { id: 3, content: '3', users: [ "Просвирнин", "Малинкин", "Глейзер" ] },
      { id: 4, content: '4', users: [ "Нияз", "Ильдар" ] },
      { id: 5, content: '5', users: [ "Неклюдов", "Гарифзянов" ] },
      { id: 6, content: '6', users: [ "Просвирнин", "Студент" ] }, 
      { id: 7, content: '6', users: [ "Саша", "Антон" ] },
    ],
    timeline: null
  },
  watch: {
    tasks: function( _tasks ) {
      this.timeline.setItems( _tasks )
    },
    groups: function( _groups ) {
      this.timeline.setGroups( _groups )
    }
  },
  mounted: function() {
    var vm = this
    // DOM element where the Timeline will be attached
    var container = document.getElementById('visualization');

    // Create a DataSet (allows two way data-binding)
    var items = new vis.DataSet(vm.tasks)
    var groups = new vis.DataSet(vm.groups)
    // Configuration for the Timeline
    var options = {
      locale: "ru",
      editable: true,
      groupEditable: true,
      stack: false,
      groupTemplate: function(group){
        container = document.createElement('div');

        group.users.forEach(function(element) {
          brigada_user = document.createElement('p');
          brigada_user.style.cssText = "font-size: 11px;"
          brigada_user.innerHTML = element;
          container.insertAdjacentElement('beforeend',brigada_user);
        });

        return container;
      },

      groupOrderSwap: function (a, b, groups) {
        var v = a.value;
        a.value = b.value;
        b.value = v;
      },

      onAdd: function (item, callback){
        console.log( 'onAdd', item )
        // $('#exampleModalCenter').on('shown.bs.modal', function () {
        //   $('.editor_input input[name=content]').val(item.content)
        // });
        // $('#exampleModalCenter').modal();
        // callback(item);
      },

      onUpdate: function (item, callback) {
        console.log( 'onUpdate', item )
        // $('#exampleModalCenter').on('shown.bs.modal', function () {
        //   $('.editor_input input[name=content]').val(item.content)
        // });
        // $('#exampleModalCenter').modal();
        // callback(item);
      },
      orientation: 'both',
    }

    // Create a Timeline
    vm.timeline = new vis.Timeline(container);
    vm.timeline.setOptions(options);
    vm.timeline.setGroups(groups);
    vm.timeline.setItems(items);
  },
  methods: {
    updateTimeline: function() {
      var _ntasks = [{"id":"1","group":"1","content":"\u0414\u043e\u0433\u043e\u0432\u043e\u0440\u043d\u044b\u0435 \u0441\u0440\u043e\u043a\u0438 \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u0440\u0430\u0431\u043e\u0442","start":"2019-03-05","end":"2019-06-13","type":"range","subtype":"contract","subgroup":"task1_contract"},{"id":"2","group":"1","content":"\u0414\u043e\u0433\u043e\u0432\u043e\u0440\u043d\u044b\u0435 \u0441\u0440\u043e\u043a\u0438 \u0441\u0434\u0430\u0447\u0438 \u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043e\u0442\u0447\u0435\u0442\u043e\u0432","start":"2019-06-13","end":"2019-09-14","type":"range","subtype":"contract","subgroup":"task1_contract"},{"id":"3","group":"1","content":"\u041d\u041f\u0421 \u0411\u0435\u043b\u0430\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u043a\u0430","start":"2019-03-05","end":"2019-09-15","type":"background","subtype":"contract","subgroup":"task1_contract"},{"id":"5","group":"1","content":"\u0414\u043e\u043f\u0443\u0441\u043a","start":"2019-03-05","end":"2019-03-14","type":"range","subtype":"real","subgroup":"task1_real"},{"id":"6","group":"1","content":"\u0420\u0430\u0431\u043e\u0442\u0430","start":"2019-03-15","end":"2019-09-14","type":"range","subtype":"real","subgroup":"task1_real"},{"id":"7","group":"1","content":"\u041e\u0442\u0447\u0435\u0442","start":"2019-09-14","end":"2019-09-15","type":"range","subtype":"real","subgroup":"task1_real"}]

      for( var i =0; i < _ntasks.length; i++  ) {
        if ( _ntasks[i].type == 'background' ) {
          delete _ntasks[i].subgroup
        }
      }


      this.timeline.setItems(_ntasks)
    }
  }
})