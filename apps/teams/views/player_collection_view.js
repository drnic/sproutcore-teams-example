// ==========================================================================
// Project:   Teams.PlayerCollectionView
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Teams */

/** @class

  (Document Your View Here)

  @extends SC.TemplateCollectionView
*/
Teams.PlayerCollectionView = SC.TemplateCollectionView.extend({
  contentBinding: ".parentView.content.players"
});
