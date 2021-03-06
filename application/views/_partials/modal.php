<div class="modal fade" id="modal_form">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h4 class="modal-title"></h4>
				<button type="button" class="close" id="close_form1" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div class="modal-body" id="form-all">
				<?php
				$uri = $this->uri->segment('1');
				if ($uri == 'product') {
					$this->load->view('product/form_product');
				} else if ($uri == 'so') {
					$this->load->view('sales/form_so');
				} else if ($uri == 'category') {
					$this->load->view('category/form_category');
				} else if ($uri == 'job') {
					$this->load->view('job/form_job');
				} else if ($uri == 'greeting') {
					$this->load->view('greeting/form_greeting');
				} else if ($uri == 'uom') {
					$this->load->view('uom/form_uom');
				} else if ($uri == 'customer') {
					$this->load->view('customer/form_customer');
				} else if ($uri == 'supplier') {
					$this->load->view('supplier/form_supplier');
				} else if ($uri == 'province') {
					$this->load->view('destination/form_province');
				} else if ($uri == 'city') {
					$this->load->view('destination/form_city');
				} else if ($uri == 'courier') {
					$this->load->view('courier/form_courier');
				} else if ($uri == 'account') {
					$this->load->view('account/form_account');
				} else if ($uri == 'user') {
					$this->load->view('user/form_user');
				}
				?>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-outline-danger" id="close_form" data-dismiss="modal">Close</button>
				<button type="button" class="btn btn-outline-primary" id="save_form">Save changes</button>
			</div>
		</div>
	</div>
</div>

<div class="modal fade" id="modal_list">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h4 class="modal-title"></h4>
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div class="modal-body">
				<?php $this->load->view('app/form_pass'); ?>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-outline-danger" id="close_list" data-dismiss="modal">Close</button>
				<button type="button" class="btn btn-outline-primary" id="save_list">Save changes</button>
			</div>
		</div>
	</div>
</div>

<div class="modal fade" id="modal_checkout">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h4 class="modal-title"></h4>
				<button type="button" class="close" id="close_checkout" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div class="modal-body">
				<?php $this->load->view('sales/form_checkout'); ?>
			</div>
		</div>
	</div>
</div>

<div class="modal fade" id="modal_exp">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h4 class="modal-title"></h4>
				<button type="button" class="close" id="close_exp" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div class="modal-body">
				<?php
				$this->load->view('expense/form_expense');
				?>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-outline-danger" id="close_exp">Close</button>
				<button type="button" class="btn btn-outline-primary" id="save_exp">Save changes</button>
			</div>
		</div>
	</div>
</div>

<div class="modal fade" id="modal_qty">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h4 class="modal-title"></h4>
				<button type="button" class="close" id="close_qty" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div class="modal-body">
				<?php
				$this->load->view('product/form_quantity');
				?>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-outline-danger" data-dismiss="modal" id="close_qty">Close</button>
				<button type="button" class="btn btn-outline-primary" id="save_qty">Save changes</button>
			</div>
		</div>
	</div>
</div>
