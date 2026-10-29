import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Textarea } from "../ui/textarea"

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

function PartnershipModal({ open, onChange }: { open: boolean, onChange: (open: boolean) => void }) {
  return (
    <Dialog open={open} onOpenChange={onChange}>
      <form>
        <DialogContent className="sm:max-w-2xl max-h-[90vh] flex flex-col">
          <DialogHeader>
            <DialogTitle>Add new partnership</DialogTitle>
            <DialogDescription>
              Add a new partnership by filling out the details below. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
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
          <DialogFooter>
            <DialogClose render={<Button variant="outline">Cancel</Button>} />
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
};

export default PartnershipModal;