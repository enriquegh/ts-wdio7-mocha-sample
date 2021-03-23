describe("Google Test", () => {
    it("should go to google and click Sauce Labs", () => {
        browser.url("google.com");

        const searchBar = $("[name='q']")
        
        searchBar.setValue("Sauce Labs");
        searchBar.click();
    
    })

})