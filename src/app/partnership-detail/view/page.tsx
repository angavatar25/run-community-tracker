import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "@/components/ui/field";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactChannel = [
  { value: "email", label: "Email" },
  { value: "phone", label: "Phone" }
];

const PartnershipStatus = [
  { value: "new", label: "New" },
  { value: "contacted", label: "Contacted" },
  { value: "negotiating", label: "Negotiating" },
  { value: "closed", label: "Closed" },
  { value: "confirmed", label: "Confirmed" },
  { value: "rejected", label: "Rejected" },
];

const PartnershipDetailView = () => {
  return (
    <div>
      <form>
        <FieldGroup>
          <FieldSet>
            <FieldLegend>Partnership Detail</FieldLegend>
            <FieldDescription>
              All transactions are secure and encrypted
            </FieldDescription>
            <FieldGroup className="grid grid-cols-2 gap-4">
              <Field>
                <FieldLabel htmlFor="brand-name">
                  Brand Name
                </FieldLabel>
                <Input
                  id="brand-name"
                  placeholder="Evil Rabbit"
                  required
                  readOnly
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
                  Contact Channel
                </FieldLabel>
                <Select readOnly items={ContactChannel} defaultValue="email">
                  <SelectTrigger id="form-country">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {ContactChannel.map((channel) => (
                        <SelectItem key={channel.value} value={channel.value}>
                          {channel.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Field>
              <Field>
                <FieldLabel htmlFor="contact-value">
                  Collaboration Type
                </FieldLabel>
                <Input
                  id="collaboration-type"
                  placeholder="Enter your collaboration type"
                  readOnly
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="partnership-status">
                  Status
                </FieldLabel>
                <Select readOnly defaultValue="new">
                  <SelectTrigger id="partnership-status">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {PartnershipStatus.map((status) => (
                        <SelectItem key={status.value} value={status.value}>
                          {status.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Field>
              <Field>
                <FieldLabel>
                  Owner Name
                </FieldLabel>
                <Input
                  id="owner-name"
                  placeholder="Enter owner name"
                  readOnly
                />
              </Field>
              <FieldSet>
              <Field>
                <FieldLabel htmlFor="internal-notes">
                  Notes
                </FieldLabel>
                <Textarea
                  id="internal-notes"
                  placeholder="Add any internal-notes"
                  className="resize-none"
                  readOnly={true}
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="message-optional">
                  Message (Optional)
                </FieldLabel>
                <Textarea
                  id="message-optional"
                  placeholder="Add any message (optional)"
                  className="resize-none"
                  readOnly
                />
              </Field>
            </FieldSet>
            </FieldGroup>
          </FieldSet>
          <Field orientation="horizontal">
            <Button variant="outline" type="button">
              Back
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  )
}

export default PartnershipDetailView;