$(document).ready(function(){$(".e-category-item").click(function(e){var t=$(this).find($(".category-hash")).text();$(".request-text").val()?$(".request-text").val($(".request-text").val()+" "+t+" "):$(".request-text").val($(".request-text").val()+t+" "),$(".request-text:contains('#asd')").css("text-decoration","underline")}),$(".e-category-item").mouseover(function(e){var t=$(this).find($(".category-desc")).text();$(this).find($(".category-desc")),$(".output-category").text(t),$(".e-category-item").mouseleave(function(e){})}),$(".address-value").change(function(e){$(".address-value").val()?($(".map-details-btn").addClass("border-green"),$(".map-details-btn").removeClass("hvr-underline-from-center")):($(".map-details-btn").addClass("hvr-underline-from-center"),$(".map-details-btn").removeClass("border-green"))}),$(".upload-wrapper").change(function(e){$(".image-preview-filename")&&($(".image-details-btn").addClass("border-green"),$(".image-details-btn").removeClass("hvr-underline-from-center")),$(".image-preview-clear").click(function(e){$(".image-details-btn").addClass("hvr-underline-from-center"),$(".image-details-btn").removeClass("border-green")})})});