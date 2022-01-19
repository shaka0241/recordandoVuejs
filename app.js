var vm = new Vue({
    el: '#app',
    data : {
        nombre: 'Alberto',
        jefe: ["Alberto", "Juan", "Pedro", "Luis"],
        tieneCobre: true,
        numero: 0,
        cedulas: { alberto: '123456789', juan: '987654321' },
    },
    methods : {
        cambiar: function() {
            this.nombre = "Alfonzo";
        },
        sumar: function() {
            this.numero = this.numero += 1;
        },
        pasarSiguienteJefe: function() {
            this.numero += 1;
            if (this.numero === 4) {
                this.numero = 0;
            }
        }
    }
})