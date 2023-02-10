export const NameDrawerTab = (label: string) => {
  switch (label) {
    case "TabNavigation":
      return "Trang chủ";
    case "ShoppingCart":
      return "Giỏ Hàng";
    case "SatusPurchaseOrder":
      return "Trạng thái đơn hàng";
    case "Favourite":
      return "Yêu thích";
    default:
      break;
  }
}