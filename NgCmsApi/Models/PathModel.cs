using System;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace NgCmsApi.Models
{
    public class PathModel
    {
        [Required]
        [JsonProperty("path")]
        public string Path { get; set; }
    }
}
