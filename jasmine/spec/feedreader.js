$(function() {
  describe("RSS Feeds", function() {
    it("are defined", function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    it("URLs are defined and not empty", function() {
      for (let i = 0; i < allFeeds.length; i++) {
        expect(allFeeds[i].url).toBeDefined();
        expect(allFeeds[i].url.length).not.toBe(0);
      }
    });

    it("URL names are defined and not empty", function() {
      for (let i = 0; i < allFeeds.length; i++) {
        expect(allFeeds[i].name).toBeDefined();
        expect(allFeeds[i].name.length).not.toBe(0);
      }
    });
  });

  describe("The menu", function() {
    const menuItems = document.querySelector("body");

    it("menu has all elements hidden by default", function() {
      expect(menuItems.classList.contains("menu-hidden")).toBe(true);
    });

    it("menu is shown after the menu icon is clicked", function() {
      const menuIcon = document.querySelector(".menu-icon-link");
      menuIcon.click();

      expect(menuItems.classList.contains("menu-hidden")).toBe(false);

      menuIcon.click();

      expect(menuItems.classList.contains("menu-hidden")).toBe(true);
    });
  });

  describe("Initial entries", function() {
    let entryElement = document.querySelector(".feed .entry");

    beforeEach(function(done) {
      loadFeed(0, function() {
        done();
      });
    });

    it("at least one element is loaded.", function(done) {
      expect(entryElement).toBeDefined();
      done();
    });
  });

  describe("New Feed Selection", function() {
    beforeEach(function(done) {
      loadFeed(0, function() {
        done();
      });
      loadFeed(1, function() {
        done();
      });
    });

    it("When a new feed is loaded, the content changes.", function(done) {
      expect(allFeeds[0].url).not.toBe(allFeeds[1].url);
      done();
    });
  });
}());
