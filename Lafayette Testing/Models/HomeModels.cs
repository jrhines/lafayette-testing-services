using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Lafayette_Testing.Models
{
    public class ContactModel
    {
        [Required]
        [DisplayName("First Name")]
        public string FirstName { get; set; }

        [Required]
        [DisplayName("Last Name")]
        public string LastName { get; set; }

        [DisplayName("Type of Business")]
        public string BusinessType { get; set; }

        [DisplayName("Address 1")]
        public string AddressLine1 { get; set; }

        [DisplayName("Address 2")]
        public string AddressLine2 { get; set; }

        public string City { get; set; }
        
        public string State { get; set; }

        [DisplayName("ZIP Code")]
        public string ZipCode { get; set; }
        
        public string Country { get; set; }

        [DisplayName("Email Address")]
        public string CountryName { get; set; }

        [Required]
        [DataType(DataType.PhoneNumber)]
        [DisplayName("Phone Number")]
        public string Phone { get; set; }

        [Required]
        [DataType(DataType.EmailAddress)]
        [DisplayName("Email Address")]
        public string Email { get; set; }

        [StringLength(500)]
        public string Comments { get; set; }
    }
}