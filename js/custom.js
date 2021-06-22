$(function () {
    $('.triger_btn').on('click', function () {
        $('.side_nav').addClass('active')
    });

    $('.side_nav .overlay').on('click', function () {
        $('.side_nav').removeClass('active')
    });
})

if (document.getElementById('ecommerce')) {

    // Vue.component('button-counter', {
    //     data: function () {
    //         return {
    //             count: 0
    //         }
    //     },
    //     template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
    // })

    const app = new Vue({
        el: '#ecommerce',
        data: function(){
            return {
                name: 'hello',
            }
        },
        created: function () {
            console.log('hi');
        }
    })
}