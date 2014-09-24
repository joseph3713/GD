/*
 * GDevelop C++ Platform
 * Copyright 2008-2014 Florian Rival (Florian.Rival@gmail.com). All rights reserved.
 * This project is released under the GNU Lesser General Public License.
 */

#ifndef KEYBOARDEXTENSION_H
#define KEYBOARDEXTENSION_H

#include "GDCpp/ExtensionBase.h"

/**
 * \brief Internal built-in extension providing keyboard features
 *
 * \ingroup BuiltinExtensions
 */
class KeyboardExtension : public ExtensionBase
{
    public:
        KeyboardExtension();
        virtual ~KeyboardExtension() {};
    protected:
    private:
};

#endif // KEYBOARDEXTENSION_H

