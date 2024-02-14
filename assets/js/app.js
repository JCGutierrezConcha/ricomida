$(document).ready(function () {

    $(function () {
        $('[data-bs-toggle="tooltip"]').tooltip()
    })

    $('#enviar_correo').click(function () {

        alert("El correo fue enviado correctamente...")
    })

    $("h5").on("dblclick", function () {

        $(this).css({
            "color": "red"
        })
    })

    $('.card-title').click(function () {
        $('.recetas-relacionadas p').toggle("hide");
    })
})