/** The need picked in the hero; the contact form turns it into the start of the message. */
export function useEnquiryTopic() {
    return useState<string>('enquiry-topic', () => '')
}
