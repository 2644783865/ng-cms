using System;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace NgCmsApi.Models
{
    public class PageCreateModel
    {
        [Required]
        [JsonProperty("path")]
        public string Path { get; set; }

        [Required]
        [JsonProperty("parentGuid")]
        public Guid ParentGuid { get; set; }
    }
}
