<div class="container-fluid">
	<div class="row">
		<div class="col-md-8">
			<div class="card card-primary card-outline">
				<div class="card-body">
					<div class="form-group row">
						<label for="pos_cashier" class="col-sm-2 col-form-label">Cashier</label>
						<div class="col-sm-4">
							<select class="form-control select2" id="pos_cashier" name="pos_cashier" disabled></select>
						</div>
						<label for="pos_date" class="col-sm-2 col-form-label">Date</label>
						<div class="col-sm-4">
							<input type="date" class="form-control" id="pos_date" name="pos_date" value="<?= date('Y-m-d') ?>" readonly>
						</div>
					</div>
					<div class="form-group row">
						<label for="pos_barcode" class="col-sm-2 col-form-label">Barcode</label>
						<div class="col-sm-10">
							<div class="input-group">
								<input type="text" class="form-control barcode" id="pos_barcode" name="pos_barcode" placeholder="Input Code Product / Scan Barcode" autofocus>
								<div class="input-group-append">
									<button type="button" class="btn btn-primary">
										<span class="fas fa-search"></span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="card-body table-responsive">
					<table id="tb_sales_pos" class="table table-bordered table-hover table-md" style="cursor:pointer; width: 100%">
						<thead>
							<tr>
								<th>#ID Product</th>
								<th>#LQty</th>
								<th>#</th>
								<th>Product</th>
								<th width="130px">Qty</th>
								<th>Price</th>
								<th>Subtotal</th>
								<th>Action</th>
							</tr>
						</thead>
					</table>
				</div>
			</div>
		</div>

		<div class="col-md-4">
			<div class="card card-secondary card-outline">
				<div class="card-body box-profile">
					<!-- <h3 class="invoice-no">Bill No # <strong id="documentno"><?= $invoiceno ?></strong></h3> -->
					<h3 class="grandtotal">Rp. <strong id="grandtotal"></strong></h3>
					<hr class="solid">
					<div class="card-header">
						<div class="float-right">
							<button type="button" class="btn btn-outline-primary" id="btn_refresh"><i class="fas fa-sync-alt"></i> Reset</button>
							<button type="button" class="btn btn-success" id="btn_checkout"><i class="far fa-credit-card"></i> Submit</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
