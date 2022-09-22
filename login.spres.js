/// <reference types="cypress" />
//verifica o login
describe ('login', () => {
    it('testando o login', () => {
        cy.visit('http://localhost:3000/')
        cy.get('#email ').type('admin');
        cy.get('#input-senha-login').type('admin123');
        cy.get('#btn-Login').click();
        cy.get('.navbar-toggler-icon').click();
        
        //menu pessoa
        //cy.get('[data-cy=Pessoas-Menu]').click();
        //menu equipe
        cy.get('[data-cy=Equipes-Menu]').click();
        cy.get('.fade').click();
        /*pagina pessoa
        //cadastrando pessoa
        cy.get('.btn-adicionarp').click();
        cy.get('[data-cy=cadpeople-nome]').type('admin')
        cy.get('[data-cy=cadpeople-fucao]').type('admin')
        cy.get('#mui-component-select-equipe_id').click()
        cy.get('.Mui-focusVisible').click()
        //cadastras
        //cy.get('.btn-post').click()
        //cancelar 
        cy.get('#butaoC').click()*/
        
        //testando o filtro 
        /*cy.get('#filtro-p').click()
        cy.get('#filtro-p').type("admin");*/
        
        // testando o inspecionar
        //cy.get('#link-pessoa-page-pessoa').click()
        //teste favorite
        //cy.get('.star').click()
        //testando o editar 
        /*cy.get('.btn-editar > a > button').click()
        cy.get('[data-cy=nome_pessoa]').type('leila Admin')
        cy.get('[data-cy=funcao_pessoa]').type('leila Admin')*/
        //cadastra
       // cy.get('.btn-edit').click()
       //cancelar
       //cy.get('.btn-cancelar').click()

       //pagina equipe
       //cy.get('#link-pagina-pr').click();
    })
})