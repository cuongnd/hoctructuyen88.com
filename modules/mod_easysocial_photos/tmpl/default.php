<?php
/**
* @package      EasySocial
* @copyright    Copyright (C) 2010 - 2014 Stack Ideas Sdn Bhd. All rights reserved.
* @license      GNU/GPL, see LICENSE.php
* EasySocial is free software. This version may have been modified pursuant
* to the GNU General Public License, and as distributed it includes or
* is derivative of works licensed under the GNU General Public License or
* other free or open source software licenses.
* See COPYRIGHT.php for copyright notices and details.
*/
defined( '_JEXEC' ) or die( 'Unauthorized Access' );
?>
<div id="fd" class="es mod-es-recent-photos module-social<?php echo $suffix;?>">

    <?php if ($photos) { ?>
    <ul class="es-item-grid">
        <?php foreach ($photos as $photo) { ?>
        <li>
            <a href="<?php echo $photo->getPermalink();?>" 
                class="mod-es-photo-cover" 
                alt="<?php echo $modules->html('string.escape', $photo->get('title'));?>"
                data-es-provide="tooltip"
                data-original-title="<?php echo $modules->html('string.escape', $photo->get('title') );?>"
                <?php if ($params->get('display_popup', true)) { ?>
                data-es-photo="<?php echo $photo->id;?>"
                <?php } ?>
                style="background-image:url('<?php echo $photo->getSource('large'); ?>');">
            </a>
        </li>
        <?php } ?>
    </ul>
    <?php } else { ?>
    <div class="empty">
        <?php echo JText::_('MOD_EASYSOCIAL_PHOTOS_NO_PHOTOS_CURRENTLY'); ?>
    </div>
    <?php } ?>

</div>
