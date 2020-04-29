/// <reference types="cypress"/>

describe('trabalho com elementos básicos.', () =>{
    before(()=>  {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })
    
    beforeEach(()=>  {
        cy.reload()
    })

    it('Texto', () => {
    cy.get('body').should('contain', 'Cuidado')
    cy.get('span').should('contain', 'Cuidado')
    cy.get('.facilAchar').should('contain', 'Cuidado')
    cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')
    })


    // it.only('Links', () => {

    // cy.contains('Voltar').click
    // cy.get('#resultado').should('have.text', 'Voltou!')
    // })

      it('Textos', () => {

        cy.get('#formNome').type('Cypress test')
        cy.get('#formNome').should('have.value', 'Cypress test')
        cy.get('#elementosForm\\:sugestoes').type('textarea').should('have.value', 'textarea')
        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input').type('??')
        cy.get('[data-cy=dataSobrenome]').type('teste1234 {backspace} {backspace}').should('have.value','teste1234')
           
        cy.get('#elementosForm\\:sugestoes')
        .clear()
        .type('Erro{selectall}acerto', {delay:'100'})
        .should('have.value', 'acerto')
    })

    it('RadioButton', () => {
        cy.get('#formSexoFem').click().should('be.checked')
        cy.get('#formSexoMasc').should('not.be.checked')
        cy.get("[name=formSexo").should('have.length', 2)

    })


    it('CheckBox',() =>{
        cy.get('#formComidaPizza').click().should('be.checked')
        cy.get('[name=formComidaFavorita]').click({multiple: true}).should('be.checked')
        cy.get('#formComidaPizza').should('not.be.checked')
        cy.get('[name=formComidaFavorita]').should('be.checked', {multiple: true})
    })

    it.only('Combo',() =>{
        
        cy.get('[data-test=dataEscolaridade]').select('2o grau completo').should('have.value','2graucomp' )
 //TODO Validar as opções do combo.
})

 it.only ('Combo Multiplo', ()=> {
     
    cy.get('[data-testid=dataEsportes]').select(['natacao','Corrida'])
    //TODO Validar opções selecionadas do combo multiplo
 })
})