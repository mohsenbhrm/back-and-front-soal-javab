using System;

namespace SoalJavab.Common
{
    public static class GuardExtensions
    {
        /// <summary>
        /// Checks if the argument is null.
        /// </summary>
        public static void CheckArgumentIsNull(this object o, string name)
        {
            if (o == null)
                throw new ArgumentNullException(name);
        }
        public static string ToShortDateTimeString(this DateTime x)
        {
            return x.ToShortDateString() +" _ "+ x.ToShortTimeString();
        }
        public static string TopersianShortDateTimeString(this DateTime x)
        {
            return x.ToShortDateString() +" _ "+ x.ToShortTimeString();
        }
    }
}
