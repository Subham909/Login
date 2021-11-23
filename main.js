<script type="text/javascript">
    $(document).ready(function () {
        $('#addUser').bootstrapValidator({
            fields: {
                Username: {
                    selector: '.User',
                    message: 'name not valid',
                    validators: {
                        notEmpty: {
                            message:'Name can not empty'
                        },
                        stringLength: {
                            min: 6,
                            max: 12,
                            message:'Name will be 6 to 12 digite'
                        }
                    }
                },
                Password: {
                    selector: '.pwd',
                    message: 'Password not valid',
                    validators: {
                        notEmpty: {
                            message: 'Password can not empty'
                        },
                        stringLength: {
                            min: 6,
                            max: 12,
                            message: 'Password will be 6 to 12 digite'
                        }
                    }
                }
            }
        })
    })
</script>