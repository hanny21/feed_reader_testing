$(function() {
  describe("RSS Feeds", function() {
    /* This test checks that the allFeeds variable
     * has been defined and that it is not empty
     */
    it("are defined", function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    /* This test loops through each feed in the allFeeds object
     * and ensures it has URLs defined and not empty
     */
    it("URLs are defined and not empty", function() {
      for (let i = 0; i < allFeeds.length; i++) {
        expect(allFeeds[i].url).toBeDefined();
        expect(allFeeds[i].url.length).not.toBe(0);
      }
    });

    /* This test loops through each feed in the allFeeds object
     * and ensures it has names defined and not empty
     */
    it("URL names are defined and not empty", function() {
      for (let i = 0; i < allFeeds.length; i++) {
        expect(allFeeds[i].name).toBeDefined();
        expect(allFeeds[i].name.length).not.toBe(0);
      }
    });
  });

  describe("The menu", function() {
    const menuItems = document.querySelector("body");

    /* This test checks that the menu element is
     * hidden by default (element has css class menu-hidden).
     */
    it("menu has all elements hidden by default", function() {
      expect(menuItems.classList.contains("menu-hidden")).toBe(true);
    });

    /* This test checks that the menu element is
     * visible after clicking at the menu icon and also
     * hidden after second click on the menu icon.
     */
    it("menu is shown after the menu icon is clicked", function() {
      const menuIcon = document.querySelector(".menu-icon-link");
      menuIcon.click();

      expect(menuItems.classList.contains("menu-hidden")).toBe(false);

      menuIcon.click();

      expect(menuItems.classList.contains("menu-hidden")).toBe(true);
    });
  });

  describe("Initial entries", function() {
    let entryElements;
    /* This test checks that when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     * Test check if length of the node list which consist of
     * all .entry elements within the .feed container.
     * The lenght of this list must be greater than zero.
     */
    beforeEach(function(done) {
      loadFeed(0, function() {
        entryElements = document.querySelectorAll(".feed .entry");
        done();
      });
    });

    it("at least one element is loaded.", function(done) {
      expect(entryElements.length).toBeGreaterThan(0);
      done();
    });
  });

  describe("New Feed Selection", function() {
    /* This test checks that when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     */
    let firstUrl, secondUrl;
    beforeEach(function(done) {
      loadFeed(0, function() {
        firstUrl = allFeeds[0].url;
        console.log("first url:", firstUrl);
        loadFeed(1, function() {
          secondUrl = allFeeds[1].url;
          console.log("second url:", secondUrl);
          done();
        });
      });
    });

    it("When a new feed is loaded, the content changes.", function(done) {
      expect(firstUrl).not.toBe(secondUrl);
      done();
    });
  });
}());
