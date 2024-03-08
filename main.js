$(document).ready(function() {
    // Adicionar tarefa ao clicar no botão
    $('#container').on('submit', function(e) {
        e.preventDefault();
        const task = $('#fieldinput').val().trim();
        if (task) {
            const listItem = $('<li>').text(task);
            $('#lista-de-tarefas').append(listItem);
            $('#fieldinput').val('');
        }
    });

    
    $('#lista-de-tarefas').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
    // efeito de linha 
});