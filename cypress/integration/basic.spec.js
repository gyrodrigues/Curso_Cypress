/// <reference types="cypress"/>

describe('cypress bacsics..', () =>{
   it.only('Visitar uma página e fazer assertiva do titulo.', () =>{
    cy.visit('https://wcaquino.me/cypress/componentes.html')
    
    // const titulo = cy.title()
    // console.log(titulo)

    cy.pause()
    cy.title().should('be.equal', 'Campo de Treinamento')
    cy.title().should('contain', 'Campo')

    cy.title().should('be.equal', 'Campo de Treinamento').should('contain', 'Campo de Treinamento')

    cy.title().should('be.equal', 'Campo de Treinamento').and('contain', 'Campo de Treinamento')

//TODO imprimir o log no console
//escrever o log em um campo de texto.

    })  


    it('Clicar e validar o valor', () =>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#buttonSimple').click()
        cy.get('#buttonSimple').should('have.value', 'Obrigado!')

        cy.get('#buttonSimple').click().should('have.value', 'Obrigado!')

    })
})