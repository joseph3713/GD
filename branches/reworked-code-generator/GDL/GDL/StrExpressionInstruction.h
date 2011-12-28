/** \file
 *  Game Develop
 *  2008-2011 Florian Rival (Florian.Rival@gmail.com)
 */

#ifndef STREXPRESSIONINSTRUCTION_H
#define STREXPRESSIONINSTRUCTION_H

#include <vector>
#include <string>
#include <boost/shared_ptr.hpp>
class GDExpression;
class ExpressionInstruction;
class Object;
class Automatism;
class ObjectsConcerned;
class RuntimeScene;

typedef std::vector < boost::shared_ptr<Object> > ObjList;
typedef boost::shared_ptr<Object> ObjSPtr;

/**
 * \brief Instruction ( function or object function ) of a string expression.
 * Each string expression is composed of several StrExpressionInstruction at runtime,
 * which are processed one by one to generate the final string.
 */
class GD_API StrExpressionInstruction
{
    public:
        StrExpressionInstruction() {};
        virtual ~StrExpressionInstruction() {};
        std::vector<GDExpression>   parameters; ///< Parameters to be passed to function
};

#endif // STREXPRESSIONINSTRUCTION_H