<?php
/**
 * @package		EasyDiscuss
 * @copyright	Copyright (C) 2010 Stack Ideas Private Limited. All rights reserved.
 * @license		GNU/GPL, see LICENSE.php
 *
 * EasyDiscuss is free software. This version may have been modified pursuant
 * to the GNU General Public License, and as distributed it includes or
 * is derivative of works licensed under the GNU General Public License or
 * other free or open source software licenses.
 * See COPYRIGHT.php for copyright notices and details.
 */
defined('_JEXEC') or die('Restricted access');
?>
<form id="discussCommentForm">
	<div class="commentNotification"></div>
	<div class="discuss-comment-form">
		<div class="clearfull">
			<div class="textarea_wrap">
				<textarea id="comment" name="comment" class="textarea full-width"></textarea>
			</div>
		</div>

		<div class="row-fluid">
			<div class="pull-left mt-5">
				<label class="checkbox">
					<input type="checkbox" name="tnc" id="tnc" value="y">
					<?php echo JText::_( 'COM_EASYDISCUSS_I_HAVE_READ_AND_AGREED' );?> <a href="javascript: disjax.load('post', 'ajaxShowTnc');" style="text-decoration: underline;"><?php echo JText::_( 'COM_EASYDISCUSS_TERMS_AND_CONDITIONS' );?></a>
				</label>
			</div>

			<div class="pull-right mt-5">
				<input type="hidden" name="post_id" id="post_id" value="<?php echo $post->id; ?>">
				<button id="btnCancel" class="btn btn-mini" onclick="discuss.comment.cancel('<?php echo $post->id; ?>');return false;">
					<span></span><?php echo JText::_( 'COM_EASYDISCUSS_BUTTON_CANCEL' ); ?>
				</button>
				<button id="btnSubmit" class="btn btn-mini btn-primary" onclick="discuss.comment.save('<?php echo $post->id; ?>');return false;">
					<span></span><?php echo JText::_( 'COM_EASYDISCUSS_BUTTON_SUBMIT' ); ?>
				</button>
				<span id="discussSubmitWait" class="float-r"></span>
			</div>
		</div>
	</div>
</form>
