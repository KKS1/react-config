import Accordion from "./Accordion";
import Address from "./Address";
import ButtonGroup from "./ButtonGroup";
import Checkbox from "./Checkbox";
import CheckboxList from "./CheckboxList";
import CurrencyField from "./CurrencyField";
import DateField from "./DateField";
import Dropdown from "./Dropdown";
import Footer from "./Footer";
import Header from "./Header";
import Label from "./Label";
import LocationAutoComplete from "./LocationAutoComplete";
import MaskedInput from "./MaskedInput";
import Paragraph from "./Paragraph";
import PercentField from "./PercentField";
import RadioGroup from "./RadioGroup";
import TextField from "./TextField";
import Zillow from "./Zillow";

import Atomic from "./index";

describe("Atomic", () => {
  test("contains_appropriate_objects", () => {
    expect(Atomic).toMatchSnapshot();
  });
});
