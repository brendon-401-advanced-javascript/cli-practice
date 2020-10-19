'use strict';

const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'list',
            name: 'joinCreateRoom',
            message: 'Would you like to...',
            choices: ['join a room', 'create a room']

        },
        
    ])
    .then(answers => {
        if(answers.joinCreateRoom == 'join a room') {
            inquirer
            .prompt([
                {
                type: 'list',
                name: 'rooms',
                message: 'Please Select a Room to Join',
                choices: ['Joes Room', 'Edgars Room', 'Dianes Room']
                },
            ])
            .then(answers => {
                console.log('you have joined', answers.rooms);
            });
        }
        if(answers.joinCreateRoom == 'create a room'){
            inquirer
            .prompt([
                {
                    type: 'list',
                    name:'numPlayers',
                    message: 'How many players',
                    choices: ['2','3','4']
                },
            ])
            .then ((answers) =>{
                console.log('you have created a new room with a max of', answers.numPlayers,'players')
            });
        }
    })